// Scene changer 
// Fausto Jiménez de la Cuesta Vallejo
// 2024-04-23

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneChanger : MonoBehaviour
{
    public void GoTo(string sceneName)
    {
        // Load the scene with the given name
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);
    }
}
