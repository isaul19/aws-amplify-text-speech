"use client";

import { Amplify, Auth, Predictions } from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "../aws-exports";
import { useState } from "react";

try {
    Amplify.configure(awsconfig);
    Amplify.register(Auth);
    Amplify.register(Predictions);
    Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (error) {
    console.error(error);
}

export default function TextToSpeech() {
    const [text, setText] = useState("hello");

    // Amplify text to speech api call
    function convert() {
        Predictions.convert({
            textToSpeech: {
                source: {
                    text: text,
                },
                voiceId: "Lupe",
            },
        })
            .then((res) => {
                const audioCtx = new AudioContext();
                const source = audioCtx.createBufferSource();
                audioCtx.decodeAudioData(res.audioStream, (buffer) => {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.start(0);
                });
            })
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <textarea
                placeholder="text"
                className="overflow-auto text-black border"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            ></textarea>
            <button onClick={() => convert()}>Play</button>
        </div>
    );
}
