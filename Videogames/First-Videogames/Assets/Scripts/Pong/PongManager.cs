// Game script for managing the pong game
// Fausto Jiménez de la Cuesta Vallejo
// 2024-04-23

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Necessary to display text in the UI
using TMPro;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float ballSpeed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

    public int pointsLeft;
    public int pointsRight;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            Reset();
        }
    }

    public void Reset()
    {
        // Check that there is a ball
        if (ball != null)
        {
            Destroy(ball);
            InitGame();
        }
    }

    // Start a new game
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    // Serve the ball with a random velocity
    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity 
            = Random.insideUnitCircle.normalized * ballSpeed;
    }

    // Increase the score of the specified player
    public void Score(string side) 
    {
        if (side == "left") 
        {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        } 
        else if (side == "right") 
        {
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        }
    }
}
