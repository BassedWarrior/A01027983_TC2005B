using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pong_goal : MonoBehaviour
{
    [SerializeField] string side;


    // Variable to reference another script
    PongManager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<PongManager>();
    }

    // Detect when the ball goes out of bounds
    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
    }
}
