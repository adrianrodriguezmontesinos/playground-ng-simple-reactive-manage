import { TrainerType } from "../types/trainer.type";

/**
 * A single trainer
 */
export interface Trainer {
    id: number;
    name: string;
    type: TrainerType;
    desc: string;
    stock: Stock;
    colors: Color[];
    trainerImage?: TrainerImage;
}

/**
 * Record with size and units per size
 */
export type Stock = Record<string, number>;

/**
 * Single string if the trainer one color and string's array if the trainer is multicolot
 */
export type Color = string | string[];

/**
 * Trainer image with the trainer id
 */
export interface TrainerImage {
    id: string;
    image: string;
}
