import { FFmpeg } from '@ffmpeg/ffmpeg'
class AudioConverter {
    #ffmpeg;

    constructor() {
        this.#ffmpeg = new FFmpeg();
    }

    async convert({arrayBuffer, outputName = "test.mp3", inputName}) {
        await this.#ffmpeg.load();
        await this.#ffmpeg.writeFile(inputName, new Uint8Array(arrayBuffer));
        await this.#ffmpeg.exec(["-i", inputName, outputName]);
        const data = await this.#ffmpeg.readFile(outputName);
        const buffer = new Uint8Array(data).buffer;
        const blob = new Blob([buffer]);
        return blob;
    }
}

export {
    AudioConverter
}