import {
  MnemonicPhrase,
  PrivateKey,
  ProviderOrUrl,
  AddressIndex,
  NumberOfAddresses,
  ShareNonce,
  DerivationPath
} from "./types";
import * as Constructor from "./constructor";

/*
 * namespace wrapper for old-style positional arguments
 */
type PossibleArguments = [
  /*
   * required
   */
  MnemonicPhrase | PrivateKey[],
  ProviderOrUrl,

  /*
   * optional
   */
  AddressIndex,
  NumberOfAddresses,
  ShareNonce,
  DerivationPath
];

// (awful to have to do it this way)
export type Arguments =
  | [PossibleArguments[0], PossibleArguments[1]]
  | [PossibleArguments[0], PossibleArguments[1], PossibleArguments[2]]
  | [
      PossibleArguments[0],
      PossibleArguments[1],
      PossibleArguments[2],
      PossibleArguments[3]
    ]
  | [
      PossibleArguments[0],
      PossibleArguments[1],
      PossibleArguments[2],
      PossibleArguments[3],
      PossibleArguments[4]
    ]
  | [
      PossibleArguments[0],
      PossibleArguments[1],
      PossibleArguments[2],
      PossibleArguments[3],
      PossibleArguments[4],
      PossibleArguments[5]
    ];
