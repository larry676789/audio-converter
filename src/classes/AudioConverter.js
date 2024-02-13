import { FFmpeg } from '@ffmpeg/ffmpeg'
class AudioConverter {
    #ffmpeg;
    #file;

    constructor(file) {
        this.#file = file;
        this.#ffmpeg = new FFmpeg();
    }

    async convert(outputName = "test.mp3") {
        await this.#ffmpeg.load();
        await this.#ffmpeg.writeFile(this.#file.name, new Uint8Array(await this.#file.arrayBuffer()));
        await this.#ffmpeg.exec(["-i", this.#file.name, outputName]);
        const data = await this.#ffmpeg.readFile(outputName);
        const buffer = new Uint8Array(data).buffer;
        const blob = new Blob([buffer]);
        return blob;
    }
}

export {
    AudioConverter
}