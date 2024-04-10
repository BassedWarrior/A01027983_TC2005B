using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float ballSpeed;

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
        if (Input.GetKeyDown(KeyCode.R) && ball != null)
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
            InitGame();
        } 
        else if (side == "right") 
        {
            pointsLeft++;
            InitGame();
        }
    }
}
