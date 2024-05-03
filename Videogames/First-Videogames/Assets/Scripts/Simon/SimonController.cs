// Simon Game Controller logic
//
// - Fausto Jiménez de la Cuesta Vallejo
// 2024-04-24

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] int counter;
    [SerializeField] float delay;
    [SerializeField] bool playerTurn = false;

    [SerializeField] int level;

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
            Debug.Log("Game Over!");
            return;
        }

        buttons[index].Highlight();
        if (counter == sequence.Count)
        {
            playerTurn = false;
            level++;
            counter = 0;
            AddToSequence();
        }
    }

    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        playerTurn = true;
    }
}
