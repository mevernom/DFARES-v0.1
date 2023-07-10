import type { Abstract } from './utility';

export type MemeType = Abstract<number, 'MemeMemeType'>;

/**
 * Enumeration of meme  types.
 */
export const MemeType = {
  Unknown: 0 as MemeType,
  Doge: 1 as MemeType,
  Cat: 2 as MemeType,
  ChunZhen: 3 as MemeType,
  IKunBird: 4 as MemeType,
  Mike: 5 as MemeType,
  Panda: 6 as MemeType,
  Pepe: 7 as MemeType,
  PigMan: 8 as MemeType,
  RobotCat: 9 as MemeType,
  TaiKuLa: 10 as MemeType,
  Wojak1: 11 as MemeType,
  Wojak2: 12 as MemeType,
  Wojak3: 13 as MemeType,
  Wojak4: 14 as MemeType,
  // Don't forget to update MIN_MEME_TYPE and/or MAX_MEME_TYPE in the `constants` package
};

/**
 * Mapping from MemeType to pretty-printed names.
 */
export const MemeTypeNames = {
  [MemeType.Unknown]: 'Unknown',
  [MemeType.Doge]: 'Doge',
  [MemeType.Cat]: 'Cat',
  [MemeType.ChunZhen]: 'ChunZhen',
  [MemeType.IKunBird]: 'IKunBird',
  [MemeType.Mike]: 'Mike',
  [MemeType.Panda]: 'Panda',
  [MemeType.Pepe]: 'Pepe',
  [MemeType.PigMan]: 'PigMan',
  [MemeType.RobotCat]: 'RobotCat',
  [MemeType.TaiKuLa]: 'TaiKuLa',
  [MemeType.Wojak1]: 'Wojak1',
  [MemeType.Wojak2]: 'Wojak2',
  [MemeType.Wojak3]: 'Wojak3',
  [MemeType.Wojak4]: 'Wojak4',
} as const;