// Simon Game Controller logic
//
// - Fausto Jiménez de la Cuesta Vallejo
// 2024-04-24

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
// Necessary to display text in the UI
using TMPro;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] int counter;
    [SerializeField] float delay;

    [SerializeField] bool playerTurn = false;
    [SerializeField] TMP_Text turn_txt;

    [SerializeField] int level;
    [SerializeField] TMP_Text level_txt;

    public int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;



    // Start is called before the first frame update
    void Start()
    {
        PrepareButtons();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void PrepareButtons()
    {
        for (int i = 0; i < numButtons; i++)
        {
            int index = i;
            // Create the copies of the button as children of the Panel
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = Color.HSVToRGB(
                    (float) index/numButtons, 1, 1);
            // Set the default color
            newButton.GetComponent<SimonButton>().Init(index);
            buttons.Add(newButton.GetComponent<SimonButton>());
            buttons[i].gameObject.GetComponent<Button>()
                .onClick.AddListener(() => ButtonPressed(index));
        }

        AddToSequence();
    }

    public void ButtonPressed(int index)
    {
        if (!playerTurn)
        {
            return;
        }
        else if (index != sequence[counter++])
        {
            turn_txt.text = "GAME OVER!";
            Debug.Log("Game Over!");
            return;
        }

        buttons[index].Highlight();
        if (counter == sequence.Count)
        {
            StartCoroutine(FinishPlayerSequence());
        }
    }

    IEnumerator FinishPlayerSequence()
    {
        yield return new WaitForSeconds(3 * delay);
        playerTurn = false;
        level++;
        counter = 0;
        AddToSequence();
    }

    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        turn_txt.text = "SIMON TURN";
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        foreach (int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        yield return new WaitForSeconds(delay);
        playerTurn = true;
        turn_txt.text = "YOUR TURN!";
    }
}
