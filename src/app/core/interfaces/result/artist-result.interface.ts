import { Image } from "./image.interface";

//Interface to define ArtistResult entity
export interface ArtistResult {
    followers:     any;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Array<Image>;
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}