// Script for Simon Button behaviour
// - Fausto Jiménez De La Cuesta Vallejo
// 2024-04-24

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    [SerializeField] float delay;
    Color originalColor;

    [SerializeField] AudioSource audio;

    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audio = GetComponent<AudioSource>();
        audio.clip = Resources.Load<AudioClip>($"Audio/{index}");
    }

    public void Highlight()
    {
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor()
    {
        GetComponent<Image>().color = Color.white;
        GetComponent<AudioSource>().Play();
        // Wait a moment before restoring the original color
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }
}
