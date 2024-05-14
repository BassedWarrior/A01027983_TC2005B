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
    [SerializeField] TMP_Text turnTxt;

    [SerializeField] int level;
    [SerializeField] TMP_Text levelTxt;

    public int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;

    string apiData = @"
    {
        ""buttons"": [
            {
                ""id"": 0,
                ""r"": 1.0,
                ""g"": 0.0,
                ""b"": 0.5
            }
        ]
    }
    ";

    [SerializeField] ColorButtons allButtons;

    [SerializeField] Transform Canvas;
    [SerializeField] GameObject modePanel;
    [SerializeField] GameObject modePanelPrefab;
    [SerializeField] GameObject modeButtonPrefab;
    [SerializeField] GameObject normalModeButton;
    [SerializeField] GameObject reverseModeButton;
    [SerializeField] bool reverseMode;

    // Start is called before the first frame update
    void Start()
    {
        ChooseMode();
    }

    void ChooseMode()
    {
        modePanel = Instantiate(modePanelPrefab, Canvas);
        normalModeButton = Instantiate(modeButtonPrefab, 
                                        modePanel.GetComponent<Transform>());
        normalModeButton.GetComponentInChildren<TMP_Text>().text = "Normal";
        normalModeButton.GetComponent<Button>()
            .onClick.AddListener(() => startGame(false));
        reverseModeButton = Instantiate(modeButtonPrefab,
                                        modePanel.GetComponent<Transform>());
        reverseModeButton.GetComponentInChildren<TMP_Text>().text = "Reverse";
        reverseModeButton.GetComponent<Button>()
            .onClick.AddListener(() => startGame(true));
    }

    public void startGame(bool reverse)
    {
        Debug.Log($"Started with reverse: {reverse}");
        reverseMode = reverse;
        Destroy(modePanel);
        PrepareButtons();
    }

    void PrepareButtons()
    {
        // Convert the JSON string into an object
        allButtons = JsonUtility.FromJson<ColorButtons>(apiData);

        foreach (ColorButton buttonData in allButtons.buttons)
        {
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = new Color(
                    buttonData.r, buttonData.g, buttonData.b);
            newButton.GetComponent<SimonButton>().Init(buttonData.id);
            newButton.GetComponent<Button>()
                .onClick.AddListener(() => ButtonPressed(buttonData.id));
            buttons.Add(newButton.GetComponent<SimonButton>());
        }
        /*
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
        */

        AddToSequence();
    }

    public void ButtonPressed(int index)
    {
        if (!playerTurn)
        {
            return;
        }
        else if (counter >= sequence.Count)
        {
            turnTxt.text = "GAME OVER!";
            playerTurn = false;
            Reset();
            return;
        }
        else if (!reverseMode && (index != sequence[counter++]))
        {
            turnTxt.text = "GAME OVER!";
            playerTurn = false;
            Reset();
            return;
        }
        else if (reverseMode && index != sequence[sequence.Count - ++counter])
        {
            turnTxt.text = "GAME OVER!";
            playerTurn = false;
            Reset();
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
        playerTurn = false;
        turnTxt.text = "SIMON TURN";
        levelTxt.text = $"SCORE: {level}";
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
        turnTxt.text = "YOUR TURN!";
    }

    public void Reset()
    {
        if (sequence.Count == 0)
        {
            return;
        }

        sequence.Clear();
        level = 0;
        counter = 0;
        playerTurn = false;
        Invoke("AddToSequence", 3 * delay);
    }
}
