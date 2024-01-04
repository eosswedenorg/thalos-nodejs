import { Channel } from "./channel";
export interface IReader {
    read(channel: Channel, handler: (message: any) => void): void;
    close(): void;
}
