import SpeechToText from "@/components/SpeechToText";
import TextToSpeech from "@/components/TextToSpeech";

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Text To Speech</h1>
            <TextToSpeech />
            <hr />
            <h1 className="text-2xl font-bold">Speech To Text</h1>
            <SpeechToText />
        </div>
    );
}
