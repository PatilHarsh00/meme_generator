import React, {useState} from "react";
import memeData from "../memeData" 

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    //Function to get the meme from memeData randomly
    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMeme(prevMeme => {
            return {
                ...meme,
                randomImage: url
            }
        })
    }

    function handleChange(e) {
        setMeme( data => ({
            ...data,
            [e.target.name] : [e.target.value]
        }))
    }

    return(
        <main>
            <div className="form">
                 <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >Get a new meme image 🖼️</button>
            </div>
            <div className="memeImage">
                <img src={meme.randomImage} alt='meme image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}