/* Control the movement of the game paddles.
 *
 * Moves paddle according to user input. Only up or down.
 *
 * - Fausto Jiménez de la Cuesta Vallejo
 * 2024 - 04 - 09
 */


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class paddle_motion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] Vector2 direction;
    [SerializeField] KeyCode positiveKey;
    [SerializeField] KeyCode negativeKey;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(positiveKey)) {
            transform.Translate(direction * speed * Time.deltaTime);
        } else if (Input.GetKey(negativeKey)) {
            transform.Translate(-direction * speed * Time.deltaTime);
        }
    }
}
