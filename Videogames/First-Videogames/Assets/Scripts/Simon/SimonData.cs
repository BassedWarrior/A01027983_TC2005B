/* Interaction with JSON for data retreival from database using API.
 *
 * Fausto Jiménez de la Cuesta Vallejo
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[System.Serializable]
public class ColorButton
{
    public int id;
    public float r;
    public float g;
    public float b;
}


[System.Serializable]
public class ColorButtons
{
    public List<ColorButton> buttons;
}
