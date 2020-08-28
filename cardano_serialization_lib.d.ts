/* tslint:disable */
/* eslint-disable */
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/
export function min_fee(tx: Transaction, linear_fee: LinearFee): BigNum;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_daedalus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: LegacyDaedalusPrivateKey): BootstrapWitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_icarus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: Bip32PrivateKey): BootstrapWitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/
export function make_vkey_witness(tx_body_hash: TransactionHash, sk: PrivateKey): Vkeywitness;
/**
* @param {TransactionMetadata} metadata
* @returns {MetadataHash}
*/
export function hash_metadata(metadata: TransactionMetadata): MetadataHash;
/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/
export function hash_transaction(tx_body: TransactionBody): TransactionHash;
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/
export function get_implicit_input(txbody: TransactionBody, pool_deposit: BigNum, key_deposit: BigNum): BigNum;
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/
export function get_deposit(txbody: TransactionBody, pool_deposit: BigNum, key_deposit: BigNum): BigNum;
/**
*/
export enum CertificateKind {
  StakeRegistration,
  StakeDeregistration,
  StakeDelegation,
  PoolRegistration,
  PoolRetirement,
  GenesisKeyDelegation,
  MoveInstantaneousRewardsCert,
}
/**
*/
export enum MIRPot {
  Reserves,
  Treasury,
}
/**
*/
export enum RelayKind {
  SingleHostAddr,
  SingleHostName,
  MultiHostName,
}
/**
*/
export enum TransactionMetadatumKind {
  MapTransactionMetadatumToTransactionMetadatum,
  ArrTransactionMetadatum,
  Int,
  Bytes,
  Text,
}
/**
*/
export enum MultisigScriptKind {
  MsigPubkey,
  MsigAll,
  MsigAny,
  MsigNOfK,
}
/**
*/
export class Address {
  free(): void;
/**
* @param {Uint8Array} data
* @returns {Address}
*/
  static from_bytes(data: Uint8Array): Address;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string | undefined} prefix
* @returns {string}
*/
  to_bech32(prefix?: string): string;
/**
* @param {string} bech_str
* @returns {Address}
*/
  static from_bech32(bech_str: string): Address;
/**
* @returns {number}
*/
  network_id(): number;
}
/**
*/
export class BaseAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @param {StakeCredential} stake
* @returns {BaseAddress}
*/
  static new(network: number, payment: StakeCredential, stake: StakeCredential): BaseAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {StakeCredential}
*/
  stake_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {BaseAddress | undefined}
*/
  static from_address(addr: Address): BaseAddress | undefined;
}
/**
*/
export class BigNum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BigNum}
*/
  static from_bytes(bytes: Uint8Array): BigNum;
/**
* @param {string} string
* @returns {BigNum}
*/
  static from_str(string: string): BigNum;
/**
* @returns {string}
*/
  to_str(): string;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_mul(other: BigNum): BigNum;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_add(other: BigNum): BigNum;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_sub(other: BigNum): BigNum;
}
/**
*/
export class Bip32PrivateKey {
  free(): void;
/**
* derive this private key with the given index.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PrivateKey}
*/
  derive(index: number): Bip32PrivateKey;
/**
* @returns {Bip32PrivateKey}
*/
  static generate_ed25519_bip32(): Bip32PrivateKey;
/**
* @returns {PrivateKey}
*/
  to_raw_key(): PrivateKey;
/**
* @returns {Bip32PublicKey}
*/
  to_public(): Bip32PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PrivateKey}
*/
  static from_bytes(bytes: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PrivateKey}
*/
  static from_bech32(bech32_str: string): Bip32PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @param {Uint8Array} entropy
* @param {Uint8Array} password
* @returns {Bip32PrivateKey}
*/
  static from_bip39_entropy(entropy: Uint8Array, password: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Bip32PublicKey {
  free(): void;
/**
* derive this public key with the given index.
*
* # Errors
*
* If the index is not a soft derivation index (< 0x80000000) then
* calling this method will fail.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PublicKey}
*/
  derive(index: number): Bip32PublicKey;
/**
* @returns {PublicKey}
*/
  to_raw_key(): PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PublicKey}
*/
  static from_bytes(bytes: Uint8Array): Bip32PublicKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PublicKey}
*/
  static from_bech32(bech32_str: string): Bip32PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Block {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Block}
*/
  static from_bytes(bytes: Uint8Array): Block;
/**
* @returns {Header}
*/
  header(): Header;
/**
* @returns {TransactionBodies}
*/
  transaction_bodies(): TransactionBodies;
/**
* @returns {TransactionWitnessSets}
*/
  transaction_witness_sets(): TransactionWitnessSets;
/**
* @returns {MapTransactionIndexToTransactionMetadata}
*/
  transaction_metadata_set(): MapTransactionIndexToTransactionMetadata;
/**
* @param {Header} header
* @param {TransactionBodies} transaction_bodies
* @param {TransactionWitnessSets} transaction_witness_sets
* @param {MapTransactionIndexToTransactionMetadata} transaction_metadata_set
* @returns {Block}
*/
  static new(header: Header, transaction_bodies: TransactionBodies, transaction_witness_sets: TransactionWitnessSets, transaction_metadata_set: MapTransactionIndexToTransactionMetadata): Block;
}
/**
*/
export class BlockHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BlockHash}
*/
  static from_bytes(bytes: Uint8Array): BlockHash;
}
/**
*/
export class BootstrapWitness {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BootstrapWitness}
*/
  static from_bytes(bytes: Uint8Array): BootstrapWitness;
/**
* @returns {Vkey}
*/
  vkey(): Vkey;
/**
* @returns {Ed25519Signature}
*/
  signature(): Ed25519Signature;
/**
* @returns {Uint8Array}
*/
  chain_code(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  attributes(): Uint8Array;
/**
* @param {Vkey} vkey
* @param {Ed25519Signature} signature
* @param {Uint8Array} chain_code
* @param {Uint8Array} attributes
* @returns {BootstrapWitness}
*/
  static new(vkey: Vkey, signature: Ed25519Signature, chain_code: Uint8Array, attributes: Uint8Array): BootstrapWitness;
}
/**
*/
export class BootstrapWitnesses {
  free(): void;
/**
* @returns {BootstrapWitnesses}
*/
  static new(): BootstrapWitnesses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {BootstrapWitness}
*/
  get(index: number): BootstrapWitness;
/**
* @param {BootstrapWitness} elem
*/
  add(elem: BootstrapWitness): void;
}
/**
*/
export class ByronAddress {
  free(): void;
/**
* @returns {string}
*/
  to_base58(): string;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ByronAddress}
*/
  static from_bytes(bytes: Uint8Array): ByronAddress;
/**
* returns the byron protocol magic embedded in the address, or mainnet id if none is present
* note: for bech32 addresses, you need to use network_id instead
* @returns {number}
*/
  byron_protocol_magic(): number;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @param {string} s
* @returns {ByronAddress}
*/
  static from_base58(s: string): ByronAddress;
/**
* @param {Bip32PublicKey} key
* @param {number} network
* @returns {ByronAddress}
*/
  static from_icarus_key(key: Bip32PublicKey, network: number): ByronAddress;
/**
* @param {string} s
* @returns {boolean}
*/
  static is_valid(s: string): boolean;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {ByronAddress | undefined}
*/
  static from_address(addr: Address): ByronAddress | undefined;
}
/**
*/
export class Certificate {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Certificate}
*/
  static from_bytes(bytes: Uint8Array): Certificate;
/**
* @param {StakeRegistration} stake_registration
* @returns {Certificate}
*/
  static new_stake_registration(stake_registration: StakeRegistration): Certificate;
/**
* @param {StakeDeregistration} stake_deregistration
* @returns {Certificate}
*/
  static new_stake_deregistration(stake_deregistration: StakeDeregistration): Certificate;
/**
* @param {StakeDelegation} stake_delegation
* @returns {Certificate}
*/
  static new_stake_delegation(stake_delegation: StakeDelegation): Certificate;
/**
* @param {PoolRegistration} pool_registration
* @returns {Certificate}
*/
  static new_pool_registration(pool_registration: PoolRegistration): Certificate;
/**
* @param {PoolRetirement} pool_retirement
* @returns {Certificate}
*/
  static new_pool_retirement(pool_retirement: PoolRetirement): Certificate;
/**
* @param {GenesisKeyDelegation} genesis_key_delegation
* @returns {Certificate}
*/
  static new_genesis_key_delegation(genesis_key_delegation: GenesisKeyDelegation): Certificate;
/**
* @param {MoveInstantaneousRewardsCert} move_instantaneous_rewards_cert
* @returns {Certificate}
*/
  static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert: MoveInstantaneousRewardsCert): Certificate;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {StakeRegistration | undefined}
*/
  as_stake_registration(): StakeRegistration | undefined;
/**
* @returns {StakeDeregistration | undefined}
*/
  as_stake_deregistration(): StakeDeregistration | undefined;
/**
* @returns {StakeDelegation | undefined}
*/
  as_stake_delegation(): StakeDelegation | undefined;
/**
* @returns {PoolRegistration | undefined}
*/
  as_pool_registration(): PoolRegistration | undefined;
/**
* @returns {PoolRetirement | undefined}
*/
  as_pool_retirement(): PoolRetirement | undefined;
/**
* @returns {GenesisKeyDelegation | undefined}
*/
  as_genesis_key_delegation(): GenesisKeyDelegation | undefined;
/**
* @returns {MoveInstantaneousRewardsCert | undefined}
*/
  as_move_instantaneous_rewards_cert(): MoveInstantaneousRewardsCert | undefined;
}
/**
*/
export class Certificates {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Certificates}
*/
  static from_bytes(bytes: Uint8Array): Certificates;
/**
* @returns {Certificates}
*/
  static new(): Certificates;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Certificate}
*/
  get(index: number): Certificate;
/**
* @param {Certificate} elem
*/
  add(elem: Certificate): void;
}
/**
*/
export class Ed25519KeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519KeyHash}
*/
  static from_bytes(bytes: Uint8Array): Ed25519KeyHash;
}
/**
*/
export class Ed25519KeyHashes {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519KeyHashes}
*/
  static from_bytes(bytes: Uint8Array): Ed25519KeyHashes;
/**
* @returns {Ed25519KeyHashes}
*/
  static new(): Ed25519KeyHashes;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Ed25519KeyHash}
*/
  get(index: number): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} elem
*/
  add(elem: Ed25519KeyHash): void;
}
/**
*/
export class Ed25519Signature {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {Ed25519Signature}
*/
  static from_bech32(bech32_str: string): Ed25519Signature;
/**
* @param {string} input
* @returns {Ed25519Signature}
*/
  static from_hex(input: string): Ed25519Signature;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519Signature}
*/
  static from_bytes(bytes: Uint8Array): Ed25519Signature;
}
/**
*/
export class EnterpriseAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @returns {EnterpriseAddress}
*/
  static new(network: number, payment: StakeCredential): EnterpriseAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {EnterpriseAddress | undefined}
*/
  static from_address(addr: Address): EnterpriseAddress | undefined;
}
/**
*/
export class GenesisDelegateHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisDelegateHash}
*/
  static from_bytes(bytes: Uint8Array): GenesisDelegateHash;
}
/**
*/
export class GenesisHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisHash}
*/
  static from_bytes(bytes: Uint8Array): GenesisHash;
}
/**
*/
export class GenesisHashes {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisHashes}
*/
  static from_bytes(bytes: Uint8Array): GenesisHashes;
/**
* @returns {GenesisHashes}
*/
  static new(): GenesisHashes;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {GenesisHash}
*/
  get(index: number): GenesisHash;
/**
* @param {GenesisHash} elem
*/
  add(elem: GenesisHash): void;
}
/**
*/
export class GenesisKeyDelegation {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisKeyDelegation}
*/
  static from_bytes(bytes: Uint8Array): GenesisKeyDelegation;
/**
* @returns {GenesisHash}
*/
  genesishash(): GenesisHash;
/**
* @returns {GenesisDelegateHash}
*/
  genesis_delegate_hash(): GenesisDelegateHash;
/**
* @returns {VRFKeyHash}
*/
  vrf_keyhash(): VRFKeyHash;
/**
* @param {GenesisHash} genesishash
* @param {GenesisDelegateHash} genesis_delegate_hash
* @param {VRFKeyHash} vrf_keyhash
* @returns {GenesisKeyDelegation}
*/
  static new(genesishash: GenesisHash, genesis_delegate_hash: GenesisDelegateHash, vrf_keyhash: VRFKeyHash): GenesisKeyDelegation;
}
/**
*/
export class Header {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Header}
*/
  static from_bytes(bytes: Uint8Array): Header;
/**
* @returns {HeaderBody}
*/
  header_body(): HeaderBody;
/**
* @returns {KESSignature}
*/
  body_signature(): KESSignature;
/**
* @param {HeaderBody} header_body
* @param {KESSignature} body_signature
* @returns {Header}
*/
  static new(header_body: HeaderBody, body_signature: KESSignature): Header;
}
/**
*/
export class HeaderBody {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {HeaderBody}
*/
  static from_bytes(bytes: Uint8Array): HeaderBody;
/**
* @returns {number}
*/
  block_number(): number;
/**
* @returns {number}
*/
  slot(): number;
/**
* @returns {BlockHash | undefined}
*/
  prev_hash(): BlockHash | undefined;
/**
* @returns {Vkey}
*/
  issuer_vkey(): Vkey;
/**
* @returns {VRFVKey}
*/
  vrf_vkey(): VRFVKey;
/**
* @returns {VRFCert}
*/
  nonce_vrf(): VRFCert;
/**
* @returns {VRFCert}
*/
  leader_vrf(): VRFCert;
/**
* @returns {number}
*/
  block_body_size(): number;
/**
* @returns {BlockHash}
*/
  block_body_hash(): BlockHash;
/**
* @returns {OperationalCert}
*/
  operational_cert(): OperationalCert;
/**
* @returns {ProtocolVersion}
*/
  protocol_version(): ProtocolVersion;
/**
* @param {number} block_number
* @param {number} slot
* @param {BlockHash | undefined} prev_hash
* @param {Vkey} issuer_vkey
* @param {VRFVKey} vrf_vkey
* @param {VRFCert} nonce_vrf
* @param {VRFCert} leader_vrf
* @param {number} block_body_size
* @param {BlockHash} block_body_hash
* @param {OperationalCert} operational_cert
* @param {ProtocolVersion} protocol_version
* @returns {HeaderBody}
*/
  static new(block_number: number, slot: number, prev_hash: BlockHash | undefined, issuer_vkey: Vkey, vrf_vkey: VRFVKey, nonce_vrf: VRFCert, leader_vrf: VRFCert, block_body_size: number, block_body_hash: BlockHash, operational_cert: OperationalCert, protocol_version: ProtocolVersion): HeaderBody;
}
/**
*/
export class Int {
  free(): void;
/**
* @param {BigNum} x
* @returns {Int}
*/
  static new(x: BigNum): Int;
/**
* @param {BigNum} x
* @returns {Int}
*/
  static new_negative(x: BigNum): Int;
}
/**
*/
export class Ipv4 {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ipv4}
*/
  static from_bytes(bytes: Uint8Array): Ipv4;
/**
* @param {Uint8Array} data
* @returns {Ipv4}
*/
  static new(data: Uint8Array): Ipv4;
}
/**
*/
export class Ipv6 {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ipv6}
*/
  static from_bytes(bytes: Uint8Array): Ipv6;
/**
* @param {Uint8Array} data
* @returns {Ipv6}
*/
  static new(data: Uint8Array): Ipv6;
}
/**
*/
export class KESSignature {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {KESSignature}
*/
  static from_bytes(bytes: Uint8Array): KESSignature;
}
/**
*/
export class KESVKey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {KESVKey}
*/
  static from_bytes(bytes: Uint8Array): KESVKey;
}
/**
*/
export class LegacyDaedalusPrivateKey {
  free(): void;
/**
* @param {Uint8Array} bytes
* @returns {LegacyDaedalusPrivateKey}
*/
  static from_bytes(bytes: Uint8Array): LegacyDaedalusPrivateKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class LinearFee {
  free(): void;
/**
* @returns {BigNum}
*/
  constant(): BigNum;
/**
* @returns {BigNum}
*/
  coefficient(): BigNum;
/**
* @param {BigNum} coefficient
* @param {BigNum} constant
* @returns {LinearFee}
*/
  static new(coefficient: BigNum, constant: BigNum): LinearFee;
}
/**
*/
export class MapTransactionIndexToTransactionMetadata {
  free(): void;
/**
* @returns {MapTransactionIndexToTransactionMetadata}
*/
  static new(): MapTransactionIndexToTransactionMetadata;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} key
* @param {TransactionMetadata} value
* @returns {TransactionMetadata | undefined}
*/
  insert(key: number, value: TransactionMetadata): TransactionMetadata | undefined;
/**
* @param {number} key
* @returns {TransactionMetadata | undefined}
*/
  get(key: number): TransactionMetadata | undefined;
/**
* @returns {Uint32Array}
*/
  keys(): Uint32Array;
}
/**
*/
export class MapTransactionMetadatumToTransactionMetadatum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MapTransactionMetadatumToTransactionMetadatum}
*/
  static from_bytes(bytes: Uint8Array): MapTransactionMetadatumToTransactionMetadatum;
/**
* @returns {MapTransactionMetadatumToTransactionMetadatum}
*/
  static new(): MapTransactionMetadatumToTransactionMetadatum;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {TransactionMetadatum} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert(key: TransactionMetadatum, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {TransactionMetadatum} key
* @returns {TransactionMetadatum | undefined}
*/
  get(key: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @returns {TransactionMetadatums}
*/
  keys(): TransactionMetadatums;
}
/**
*/
export class MetadataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MetadataHash}
*/
  static from_bytes(bytes: Uint8Array): MetadataHash;
}
/**
*/
export class MoveInstantaneousReward {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MoveInstantaneousReward}
*/
  static from_bytes(bytes: Uint8Array): MoveInstantaneousReward;
/**
* @param {number} pot
* @returns {MoveInstantaneousReward}
*/
  static new(pot: number): MoveInstantaneousReward;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {StakeCredential} key
* @param {BigNum} value
* @returns {BigNum | undefined}
*/
  insert(key: StakeCredential, value: BigNum): BigNum | undefined;
/**
* @param {StakeCredential} key
* @returns {BigNum | undefined}
*/
  get(key: StakeCredential): BigNum | undefined;
/**
* @returns {StakeCredentials}
*/
  keys(): StakeCredentials;
}
/**
*/
export class MoveInstantaneousRewardsCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MoveInstantaneousRewardsCert}
*/
  static from_bytes(bytes: Uint8Array): MoveInstantaneousRewardsCert;
/**
* @returns {MoveInstantaneousReward}
*/
  move_instantaneous_reward(): MoveInstantaneousReward;
/**
* @param {MoveInstantaneousReward} move_instantaneous_reward
* @returns {MoveInstantaneousRewardsCert}
*/
  static new(move_instantaneous_reward: MoveInstantaneousReward): MoveInstantaneousRewardsCert;
}
/**
*/
export class MsigAll {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MsigAll}
*/
  static from_bytes(bytes: Uint8Array): MsigAll;
/**
* @returns {MultisigScripts}
*/
  multisig_scripts(): MultisigScripts;
/**
* @param {MultisigScripts} multisig_scripts
* @returns {MsigAll}
*/
  static new(multisig_scripts: MultisigScripts): MsigAll;
}
/**
*/
export class MsigAny {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MsigAny}
*/
  static from_bytes(bytes: Uint8Array): MsigAny;
/**
* @returns {MultisigScripts}
*/
  multisig_scripts(): MultisigScripts;
/**
* @param {MultisigScripts} multisig_scripts
* @returns {MsigAny}
*/
  static new(multisig_scripts: MultisigScripts): MsigAny;
}
/**
*/
export class MsigNOfK {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MsigNOfK}
*/
  static from_bytes(bytes: Uint8Array): MsigNOfK;
/**
* @returns {number}
*/
  n(): number;
/**
* @returns {MultisigScripts}
*/
  multisig_scripts(): MultisigScripts;
/**
* @param {number} n
* @param {MultisigScripts} multisig_scripts
* @returns {MsigNOfK}
*/
  static new(n: number, multisig_scripts: MultisigScripts): MsigNOfK;
}
/**
*/
export class MsigPubkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MsigPubkey}
*/
  static from_bytes(bytes: Uint8Array): MsigPubkey;
/**
* @returns {Ed25519KeyHash}
*/
  addr_keyhash(): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} addr_keyhash
* @returns {MsigPubkey}
*/
  static new(addr_keyhash: Ed25519KeyHash): MsigPubkey;
}
/**
*/
export class MultiHostName {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MultiHostName}
*/
  static from_bytes(bytes: Uint8Array): MultiHostName;
/**
* @returns {string}
*/
  dns_name(): string;
/**
* @param {string} dns_name
* @returns {MultiHostName}
*/
  static new(dns_name: string): MultiHostName;
}
/**
*/
export class MultisigScript {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MultisigScript}
*/
  static from_bytes(bytes: Uint8Array): MultisigScript;
/**
* @param {Ed25519KeyHash} addr_keyhash
* @returns {MultisigScript}
*/
  static new_msig_pubkey(addr_keyhash: Ed25519KeyHash): MultisigScript;
/**
* @param {MultisigScripts} multisig_scripts
* @returns {MultisigScript}
*/
  static new_msig_all(multisig_scripts: MultisigScripts): MultisigScript;
/**
* @param {MultisigScripts} multisig_scripts
* @returns {MultisigScript}
*/
  static new_msig_any(multisig_scripts: MultisigScripts): MultisigScript;
/**
* @param {number} n
* @param {MultisigScripts} multisig_scripts
* @returns {MultisigScript}
*/
  static new_msig_n_of_k(n: number, multisig_scripts: MultisigScripts): MultisigScript;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {MsigPubkey | undefined}
*/
  as_multisig_script0(): MsigPubkey | undefined;
/**
* @returns {MsigAll | undefined}
*/
  as_multisig_script1(): MsigAll | undefined;
/**
* @returns {MsigAny | undefined}
*/
  as_multisig_script2(): MsigAny | undefined;
/**
* @returns {MsigNOfK | undefined}
*/
  as_multisig_script3(): MsigNOfK | undefined;
}
/**
*/
export class MultisigScripts {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MultisigScripts}
*/
  static from_bytes(bytes: Uint8Array): MultisigScripts;
/**
* @returns {MultisigScripts}
*/
  static new(): MultisigScripts;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {MultisigScript}
*/
  get(index: number): MultisigScript;
/**
* @param {MultisigScript} elem
*/
  add(elem: MultisigScript): void;
}
/**
*/
export class Nonce {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Nonce}
*/
  static from_bytes(bytes: Uint8Array): Nonce;
/**
* @returns {Nonce}
*/
  static new_identity(): Nonce;
/**
* @param {Uint8Array} hash
* @returns {Nonce}
*/
  static new_from_hash(hash: Uint8Array): Nonce;
/**
* @returns {Uint8Array | undefined}
*/
  get_hash(): Uint8Array | undefined;
}
/**
*/
export class OperationalCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {OperationalCert}
*/
  static from_bytes(bytes: Uint8Array): OperationalCert;
/**
* @returns {KESVKey}
*/
  hot_vkey(): KESVKey;
/**
* @returns {number}
*/
  sequence_number(): number;
/**
* @returns {number}
*/
  kes_period(): number;
/**
* @returns {Ed25519Signature}
*/
  sigma(): Ed25519Signature;
/**
* @param {KESVKey} hot_vkey
* @param {number} sequence_number
* @param {number} kes_period
* @param {Ed25519Signature} sigma
* @returns {OperationalCert}
*/
  static new(hot_vkey: KESVKey, sequence_number: number, kes_period: number, sigma: Ed25519Signature): OperationalCert;
}
/**
*/
export class Pointer {
  free(): void;
/**
* @param {number} slot
* @param {number} tx_index
* @param {number} cert_index
* @returns {Pointer}
*/
  static new(slot: number, tx_index: number, cert_index: number): Pointer;
/**
* @returns {number}
*/
  slot(): number;
/**
* @returns {number}
*/
  tx_index(): number;
/**
* @returns {number}
*/
  cert_index(): number;
}
/**
*/
export class PointerAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @param {Pointer} stake
* @returns {PointerAddress}
*/
  static new(network: number, payment: StakeCredential, stake: Pointer): PointerAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Pointer}
*/
  stake_pointer(): Pointer;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {PointerAddress | undefined}
*/
  static from_address(addr: Address): PointerAddress | undefined;
}
/**
*/
export class PoolMetadata {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolMetadata}
*/
  static from_bytes(bytes: Uint8Array): PoolMetadata;
/**
* @returns {string}
*/
  url(): string;
/**
* @returns {MetadataHash}
*/
  metadata_hash(): MetadataHash;
/**
* @param {string} url
* @param {MetadataHash} metadata_hash
* @returns {PoolMetadata}
*/
  static new(url: string, metadata_hash: MetadataHash): PoolMetadata;
}
/**
*/
export class PoolParams {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolParams}
*/
  static from_bytes(bytes: Uint8Array): PoolParams;
/**
* @returns {Ed25519KeyHash}
*/
  operator(): Ed25519KeyHash;
/**
* @returns {VRFKeyHash}
*/
  vrf_keyhash(): VRFKeyHash;
/**
* @returns {BigNum}
*/
  pledge(): BigNum;
/**
* @returns {BigNum}
*/
  cost(): BigNum;
/**
* @returns {UnitInterval}
*/
  margin(): UnitInterval;
/**
* @returns {RewardAddress}
*/
  reward_account(): RewardAddress;
/**
* @returns {Ed25519KeyHashes}
*/
  pool_owners(): Ed25519KeyHashes;
/**
* @returns {Relays}
*/
  relays(): Relays;
/**
* @returns {PoolMetadata | undefined}
*/
  pool_metadata(): PoolMetadata | undefined;
/**
* @param {Ed25519KeyHash} operator
* @param {VRFKeyHash} vrf_keyhash
* @param {BigNum} pledge
* @param {BigNum} cost
* @param {UnitInterval} margin
* @param {RewardAddress} reward_account
* @param {Ed25519KeyHashes} pool_owners
* @param {Relays} relays
* @param {PoolMetadata | undefined} pool_metadata
* @returns {PoolParams}
*/
  static new(operator: Ed25519KeyHash, vrf_keyhash: VRFKeyHash, pledge: BigNum, cost: BigNum, margin: UnitInterval, reward_account: RewardAddress, pool_owners: Ed25519KeyHashes, relays: Relays, pool_metadata?: PoolMetadata): PoolParams;
}
/**
*/
export class PoolRegistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolRegistration}
*/
  static from_bytes(bytes: Uint8Array): PoolRegistration;
/**
* @returns {PoolParams}
*/
  pool_params(): PoolParams;
/**
* @param {PoolParams} pool_params
* @returns {PoolRegistration}
*/
  static new(pool_params: PoolParams): PoolRegistration;
}
/**
*/
export class PoolRetirement {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolRetirement}
*/
  static from_bytes(bytes: Uint8Array): PoolRetirement;
/**
* @returns {Ed25519KeyHash}
*/
  pool_keyhash(): Ed25519KeyHash;
/**
* @returns {number}
*/
  epoch(): number;
/**
* @param {Ed25519KeyHash} pool_keyhash
* @param {number} epoch
* @returns {PoolRetirement}
*/
  static new(pool_keyhash: Ed25519KeyHash, epoch: number): PoolRetirement;
}
/**
*/
export class PrivateKey {
  free(): void;
/**
* @returns {PublicKey}
*/
  to_public(): PublicKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519(): PrivateKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519extended(): PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_extended_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_normal_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} message
* @returns {Ed25519Signature}
*/
  sign(message: Uint8Array): Ed25519Signature;
}
/**
*/
export class ProposedProtocolParameterUpdates {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProposedProtocolParameterUpdates}
*/
  static from_bytes(bytes: Uint8Array): ProposedProtocolParameterUpdates;
/**
* @returns {ProposedProtocolParameterUpdates}
*/
  static new(): ProposedProtocolParameterUpdates;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {GenesisHash} key
* @param {ProtocolParamUpdate} value
* @returns {ProtocolParamUpdate | undefined}
*/
  insert(key: GenesisHash, value: ProtocolParamUpdate): ProtocolParamUpdate | undefined;
/**
* @param {GenesisHash} key
* @returns {ProtocolParamUpdate | undefined}
*/
  get(key: GenesisHash): ProtocolParamUpdate | undefined;
/**
* @returns {GenesisHashes}
*/
  keys(): GenesisHashes;
}
/**
*/
export class ProtocolParamUpdate {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolParamUpdate}
*/
  static from_bytes(bytes: Uint8Array): ProtocolParamUpdate;
/**
* @param {BigNum} minfee_a
*/
  set_minfee_a(minfee_a: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  minfee_a(): BigNum | undefined;
/**
* @param {BigNum} minfee_b
*/
  set_minfee_b(minfee_b: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  minfee_b(): BigNum | undefined;
/**
* @param {number} max_block_body_size
*/
  set_max_block_body_size(max_block_body_size: number): void;
/**
* @returns {number | undefined}
*/
  max_block_body_size(): number | undefined;
/**
* @param {number} max_tx_size
*/
  set_max_tx_size(max_tx_size: number): void;
/**
* @returns {number | undefined}
*/
  max_tx_size(): number | undefined;
/**
* @param {number} max_block_header_size
*/
  set_max_block_header_size(max_block_header_size: number): void;
/**
* @returns {number | undefined}
*/
  max_block_header_size(): number | undefined;
/**
* @param {BigNum} key_deposit
*/
  set_key_deposit(key_deposit: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  key_deposit(): BigNum | undefined;
/**
* @param {BigNum} pool_deposit
*/
  set_pool_deposit(pool_deposit: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  pool_deposit(): BigNum | undefined;
/**
* @param {number} max_epoch
*/
  set_max_epoch(max_epoch: number): void;
/**
* @returns {number | undefined}
*/
  max_epoch(): number | undefined;
/**
* @param {number} n_opt
*/
  set_n_opt(n_opt: number): void;
/**
* @returns {number | undefined}
*/
  n_opt(): number | undefined;
/**
* @param {UnitInterval} pool_pledge_influence
*/
  set_pool_pledge_influence(pool_pledge_influence: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  pool_pledge_influence(): UnitInterval | undefined;
/**
* @param {UnitInterval} expansion_rate
*/
  set_expansion_rate(expansion_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  expansion_rate(): UnitInterval | undefined;
/**
* @param {UnitInterval} treasury_growth_rate
*/
  set_treasury_growth_rate(treasury_growth_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  treasury_growth_rate(): UnitInterval | undefined;
/**
* @param {UnitInterval} d
*/
  set_d(d: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  d(): UnitInterval | undefined;
/**
* @param {Nonce} extra_entropy
*/
  set_extra_entropy(extra_entropy: Nonce): void;
/**
* @returns {Nonce | undefined}
*/
  extra_entropy(): Nonce | undefined;
/**
* @param {ProtocolVersions} protocol_version
*/
  set_protocol_version(protocol_version: ProtocolVersions): void;
/**
* @returns {ProtocolVersions | undefined}
*/
  protocol_version(): ProtocolVersions | undefined;
/**
* @param {BigNum} min_utxo_value
*/
  set_min_utxo_value(min_utxo_value: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  min_utxo_value(): BigNum | undefined;
/**
* @returns {ProtocolParamUpdate}
*/
  static new(): ProtocolParamUpdate;
}
/**
*/
export class ProtocolVersion {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolVersion}
*/
  static from_bytes(bytes: Uint8Array): ProtocolVersion;
/**
* @returns {number}
*/
  major(): number;
/**
* @returns {number}
*/
  minor(): number;
/**
* @param {number} major
* @param {number} minor
* @returns {ProtocolVersion}
*/
  static new(major: number, minor: number): ProtocolVersion;
}
/**
*/
export class ProtocolVersions {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolVersions}
*/
  static from_bytes(bytes: Uint8Array): ProtocolVersions;
/**
* @returns {ProtocolVersions}
*/
  static new(): ProtocolVersions;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {ProtocolVersion}
*/
  get(index: number): ProtocolVersion;
/**
* @param {ProtocolVersion} elem
*/
  add(elem: ProtocolVersion): void;
}
/**
* ED25519 key used as public key
*/
export class PublicKey {
  free(): void;
/**
* Get private key from its bech32 representation
* Example:
* ```javascript
* const pkey = PublicKey.from_bech32(&#39;ed25519_pk1dgaagyh470y66p899txcl3r0jaeaxu6yd7z2dxyk55qcycdml8gszkxze2&#39;);
* ```
* @param {string} bech32_str
* @returns {PublicKey}
*/
  static from_bech32(bech32_str: string): PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PublicKey}
*/
  static from_bytes(bytes: Uint8Array): PublicKey;
/**
* @param {Uint8Array} data
* @param {Ed25519Signature} signature
* @returns {boolean}
*/
  verify(data: Uint8Array, signature: Ed25519Signature): boolean;
/**
* @returns {Ed25519KeyHash}
*/
  hash(): Ed25519KeyHash;
}
/**
*/
export class PublicKeys {
  free(): void;
/**
*/
  constructor();
/**
* @returns {number}
*/
  size(): number;
/**
* @param {number} index
* @returns {PublicKey}
*/
  get(index: number): PublicKey;
/**
* @param {PublicKey} key
*/
  add(key: PublicKey): void;
}
/**
*/
export class Relay {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Relay}
*/
  static from_bytes(bytes: Uint8Array): Relay;
/**
* @param {SingleHostAddr} single_host_addr
* @returns {Relay}
*/
  static new_single_host_addr(single_host_addr: SingleHostAddr): Relay;
/**
* @param {SingleHostName} single_host_name
* @returns {Relay}
*/
  static new_single_host_name(single_host_name: SingleHostName): Relay;
/**
* @param {MultiHostName} multi_host_name
* @returns {Relay}
*/
  static new_multi_host_name(multi_host_name: MultiHostName): Relay;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {SingleHostAddr | undefined}
*/
  as_single_host_addr(): SingleHostAddr | undefined;
/**
* @returns {SingleHostName | undefined}
*/
  as_single_host_name(): SingleHostName | undefined;
/**
* @returns {MultiHostName | undefined}
*/
  as_multi_host_name(): MultiHostName | undefined;
}
/**
*/
export class Relays {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Relays}
*/
  static from_bytes(bytes: Uint8Array): Relays;
/**
* @returns {Relays}
*/
  static new(): Relays;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Relay}
*/
  get(index: number): Relay;
/**
* @param {Relay} elem
*/
  add(elem: Relay): void;
}
/**
*/
export class RewardAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @returns {RewardAddress}
*/
  static new(network: number, payment: StakeCredential): RewardAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {RewardAddress | undefined}
*/
  static from_address(addr: Address): RewardAddress | undefined;
}
/**
*/
export class RewardAddresses {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {RewardAddresses}
*/
  static from_bytes(bytes: Uint8Array): RewardAddresses;
/**
* @returns {RewardAddresses}
*/
  static new(): RewardAddresses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {RewardAddress}
*/
  get(index: number): RewardAddress;
/**
* @param {RewardAddress} elem
*/
  add(elem: RewardAddress): void;
}
/**
*/
export class ScriptHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptHash}
*/
  static from_bytes(bytes: Uint8Array): ScriptHash;
}
/**
*/
export class SingleHostAddr {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {SingleHostAddr}
*/
  static from_bytes(bytes: Uint8Array): SingleHostAddr;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {Ipv4 | undefined}
*/
  ipv4(): Ipv4 | undefined;
/**
* @returns {Ipv6 | undefined}
*/
  ipv6(): Ipv6 | undefined;
/**
* @param {number | undefined} port
* @param {Ipv4 | undefined} ipv4
* @param {Ipv6 | undefined} ipv6
* @returns {SingleHostAddr}
*/
  static new(port?: number, ipv4?: Ipv4, ipv6?: Ipv6): SingleHostAddr;
}
/**
*/
export class SingleHostName {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {SingleHostName}
*/
  static from_bytes(bytes: Uint8Array): SingleHostName;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {string}
*/
  dns_name(): string;
/**
* @param {number | undefined} port
* @param {string} dns_name
* @returns {SingleHostName}
*/
  static new(port: number | undefined, dns_name: string): SingleHostName;
}
/**
*/
export class StakeCredential {
  free(): void;
/**
* @param {Ed25519KeyHash} hash
* @returns {StakeCredential}
*/
  static from_keyhash(hash: Ed25519KeyHash): StakeCredential;
/**
* @param {ScriptHash} hash
* @returns {StakeCredential}
*/
  static from_scripthash(hash: ScriptHash): StakeCredential;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  to_keyhash(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  to_scripthash(): ScriptHash | undefined;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeCredential}
*/
  static from_bytes(bytes: Uint8Array): StakeCredential;
}
/**
*/
export class StakeCredentials {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeCredentials}
*/
  static from_bytes(bytes: Uint8Array): StakeCredentials;
/**
* @returns {StakeCredentials}
*/
  static new(): StakeCredentials;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {StakeCredential}
*/
  get(index: number): StakeCredential;
/**
* @param {StakeCredential} elem
*/
  add(elem: StakeCredential): void;
}
/**
*/
export class StakeDelegation {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeDelegation}
*/
  static from_bytes(bytes: Uint8Array): StakeDelegation;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @returns {Ed25519KeyHash}
*/
  pool_keyhash(): Ed25519KeyHash;
/**
* @param {StakeCredential} stake_credential
* @param {Ed25519KeyHash} pool_keyhash
* @returns {StakeDelegation}
*/
  static new(stake_credential: StakeCredential, pool_keyhash: Ed25519KeyHash): StakeDelegation;
}
/**
*/
export class StakeDeregistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeDeregistration}
*/
  static from_bytes(bytes: Uint8Array): StakeDeregistration;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @param {StakeCredential} stake_credential
* @returns {StakeDeregistration}
*/
  static new(stake_credential: StakeCredential): StakeDeregistration;
}
/**
*/
export class StakeRegistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeRegistration}
*/
  static from_bytes(bytes: Uint8Array): StakeRegistration;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @param {StakeCredential} stake_credential
* @returns {StakeRegistration}
*/
  static new(stake_credential: StakeCredential): StakeRegistration;
}
/**
*/
export class Transaction {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Transaction}
*/
  static from_bytes(bytes: Uint8Array): Transaction;
/**
* @returns {TransactionBody}
*/
  body(): TransactionBody;
/**
* @returns {TransactionWitnessSet}
*/
  witness_set(): TransactionWitnessSet;
/**
* @returns {TransactionMetadata | undefined}
*/
  metadata(): TransactionMetadata | undefined;
/**
* @param {TransactionBody} body
* @param {TransactionWitnessSet} witness_set
* @param {TransactionMetadata | undefined} metadata
* @returns {Transaction}
*/
  static new(body: TransactionBody, witness_set: TransactionWitnessSet, metadata?: TransactionMetadata): Transaction;
}
/**
*/
export class TransactionBodies {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionBodies}
*/
  static from_bytes(bytes: Uint8Array): TransactionBodies;
/**
* @returns {TransactionBodies}
*/
  static new(): TransactionBodies;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionBody}
*/
  get(index: number): TransactionBody;
/**
* @param {TransactionBody} elem
*/
  add(elem: TransactionBody): void;
}
/**
*/
export class TransactionBody {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionBody}
*/
  static from_bytes(bytes: Uint8Array): TransactionBody;
/**
* @returns {TransactionInputs}
*/
  inputs(): TransactionInputs;
/**
* @returns {TransactionOutputs}
*/
  outputs(): TransactionOutputs;
/**
* @returns {BigNum}
*/
  fee(): BigNum;
/**
* @returns {number}
*/
  ttl(): number;
/**
* @param {Certificates} certs
*/
  set_certs(certs: Certificates): void;
/**
* @returns {Certificates | undefined}
*/
  certs(): Certificates | undefined;
/**
* @param {Withdrawals} withdrawals
*/
  set_withdrawals(withdrawals: Withdrawals): void;
/**
* @returns {Withdrawals | undefined}
*/
  withdrawals(): Withdrawals | undefined;
/**
* @param {Update} update
*/
  set_update(update: Update): void;
/**
* @returns {Update | undefined}
*/
  update(): Update | undefined;
/**
* @param {MetadataHash} metadata_hash
*/
  set_metadata_hash(metadata_hash: MetadataHash): void;
/**
* @returns {MetadataHash | undefined}
*/
  metadata_hash(): MetadataHash | undefined;
/**
* @param {TransactionInputs} inputs
* @param {TransactionOutputs} outputs
* @param {BigNum} fee
* @param {number} ttl
* @returns {TransactionBody}
*/
  static new(inputs: TransactionInputs, outputs: TransactionOutputs, fee: BigNum, ttl: number): TransactionBody;
}
/**
*/
export class TransactionBuilder {
  free(): void;
/**
* @param {Ed25519KeyHash} hash
* @param {TransactionInput} input
* @param {BigNum} amount
*/
  add_key_input(hash: Ed25519KeyHash, input: TransactionInput, amount: BigNum): void;
/**
* @param {ScriptHash} hash
* @param {TransactionInput} input
* @param {BigNum} amount
*/
  add_script_input(hash: ScriptHash, input: TransactionInput, amount: BigNum): void;
/**
* @param {ByronAddress} hash
* @param {TransactionInput} input
* @param {BigNum} amount
*/
  add_bootstrap_input(hash: ByronAddress, input: TransactionInput, amount: BigNum): void;
/**
* @param {TransactionOutput} output
*/
  add_output(output: TransactionOutput): void;
/**
* calculates how much the fee would increase if you added a given output
* @param {TransactionOutput} output
* @returns {BigNum}
*/
  fee_for_output(output: TransactionOutput): BigNum;
/**
* @param {BigNum} fee
*/
  set_fee(fee: BigNum): void;
/**
* @param {number} ttl
*/
  set_ttl(ttl: number): void;
/**
* @param {Certificates} certs
*/
  set_certs(certs: Certificates): void;
/**
* @param {Withdrawals} withdrawals
*/
  set_withdrawals(withdrawals: Withdrawals): void;
/**
* @param {TransactionMetadata} metadata
*/
  set_metadata(metadata: TransactionMetadata): void;
/**
* @param {LinearFee} linear_fee
* @param {BigNum} minimum_utxo_val
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {TransactionBuilder}
*/
  static new(linear_fee: LinearFee, minimum_utxo_val: BigNum, pool_deposit: BigNum, key_deposit: BigNum): TransactionBuilder;
/**
* does not include refunds or withdrawals
* @returns {BigNum}
*/
  get_explicit_input(): BigNum;
/**
* withdrawals and refunds
* @returns {BigNum}
*/
  get_implicit_input(): BigNum;
/**
* does not include fee
* @returns {BigNum}
*/
  get_explicit_output(): BigNum;
/**
* @returns {BigNum}
*/
  get_deposit(): BigNum;
/**
* @returns {BigNum | undefined}
*/
  get_fee_if_set(): BigNum | undefined;
/**
* Warning: this function will mutate the /fee/ field
* @param {Address} address
* @returns {boolean}
*/
  add_change_if_needed(address: Address): boolean;
/**
* @returns {TransactionBody}
*/
  build(): TransactionBody;
/**
* warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
* warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
* this is done to simplify the library code, but can be fixed later
* @returns {BigNum}
*/
  min_fee(): BigNum;
}
/**
*/
export class TransactionHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionHash}
*/
  static from_bytes(bytes: Uint8Array): TransactionHash;
}
/**
*/
export class TransactionInput {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionInput}
*/
  static from_bytes(bytes: Uint8Array): TransactionInput;
/**
* @returns {TransactionHash}
*/
  transaction_id(): TransactionHash;
/**
* @returns {number}
*/
  index(): number;
/**
* @param {TransactionHash} transaction_id
* @param {number} index
* @returns {TransactionInput}
*/
  static new(transaction_id: TransactionHash, index: number): TransactionInput;
}
/**
*/
export class TransactionInputs {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionInputs}
*/
  static from_bytes(bytes: Uint8Array): TransactionInputs;
/**
* @returns {TransactionInputs}
*/
  static new(): TransactionInputs;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionInput}
*/
  get(index: number): TransactionInput;
/**
* @param {TransactionInput} elem
*/
  add(elem: TransactionInput): void;
}
/**
*/
export class TransactionMetadata {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadata}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadata;
/**
* @returns {TransactionMetadata}
*/
  static new(): TransactionMetadata;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {BigNum} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert(key: BigNum, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {BigNum} key
* @returns {TransactionMetadatum | undefined}
*/
  get(key: BigNum): TransactionMetadatum | undefined;
/**
* @returns {TransactionMetadatumLabels}
*/
  keys(): TransactionMetadatumLabels;
}
/**
*/
export class TransactionMetadatum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {MapTransactionMetadatumToTransactionMetadatum} map_transaction_metadatum_to_transaction_metadatum
* @returns {TransactionMetadatum}
*/
  static new_map_transaction_metadatum_to_transaction_metadatum(map_transaction_metadatum_to_transaction_metadatum: MapTransactionMetadatumToTransactionMetadatum): TransactionMetadatum;
/**
* @param {TransactionMetadatums} arr_transaction_metadatum
* @returns {TransactionMetadatum}
*/
  static new_arr_transaction_metadatum(arr_transaction_metadatum: TransactionMetadatums): TransactionMetadatum;
/**
* @param {Int} int
* @returns {TransactionMetadatum}
*/
  static new_int(int: Int): TransactionMetadatum;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
  static new_bytes(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {string} text
* @returns {TransactionMetadatum}
*/
  static new_text(text: string): TransactionMetadatum;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {MapTransactionMetadatumToTransactionMetadatum | undefined}
*/
  as_map_transaction_metadatum_to_transaction_metadatum(): MapTransactionMetadatumToTransactionMetadatum | undefined;
/**
* @returns {TransactionMetadatums | undefined}
*/
  as_arr_transaction_metadatum(): TransactionMetadatums | undefined;
/**
* @returns {Int | undefined}
*/
  as_int(): Int | undefined;
/**
* @returns {Uint8Array | undefined}
*/
  as_bytes(): Uint8Array | undefined;
/**
* @returns {string | undefined}
*/
  as_text(): string | undefined;
}
/**
*/
export class TransactionMetadatumLabels {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatumLabels}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadatumLabels;
/**
* @returns {TransactionMetadatumLabels}
*/
  static new(): TransactionMetadatumLabels;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {BigNum}
*/
  get(index: number): BigNum;
/**
* @param {BigNum} elem
*/
  add(elem: BigNum): void;
}
/**
*/
export class TransactionMetadatums {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatums}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadatums;
/**
* @returns {TransactionMetadatums}
*/
  static new(): TransactionMetadatums;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionMetadatum}
*/
  get(index: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} elem
*/
  add(elem: TransactionMetadatum): void;
}
/**
*/
export class TransactionOutput {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionOutput}
*/
  static from_bytes(bytes: Uint8Array): TransactionOutput;
/**
* @returns {Address}
*/
  address(): Address;
/**
* @returns {BigNum}
*/
  amount(): BigNum;
/**
* @param {Address} address
* @param {BigNum} amount
* @returns {TransactionOutput}
*/
  static new(address: Address, amount: BigNum): TransactionOutput;
}
/**
*/
export class TransactionOutputs {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionOutputs}
*/
  static from_bytes(bytes: Uint8Array): TransactionOutputs;
/**
* @returns {TransactionOutputs}
*/
  static new(): TransactionOutputs;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionOutput}
*/
  get(index: number): TransactionOutput;
/**
* @param {TransactionOutput} elem
*/
  add(elem: TransactionOutput): void;
}
/**
*/
export class TransactionWitnessSet {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionWitnessSet}
*/
  static from_bytes(bytes: Uint8Array): TransactionWitnessSet;
/**
* @param {Vkeywitnesses} vkeys
*/
  set_vkeys(vkeys: Vkeywitnesses): void;
/**
* @returns {Vkeywitnesses | undefined}
*/
  vkeys(): Vkeywitnesses | undefined;
/**
* @param {MultisigScripts} scripts
*/
  set_scripts(scripts: MultisigScripts): void;
/**
* @returns {MultisigScripts | undefined}
*/
  scripts(): MultisigScripts | undefined;
/**
* @param {BootstrapWitnesses} bootstraps
*/
  set_bootstraps(bootstraps: BootstrapWitnesses): void;
/**
* @returns {BootstrapWitnesses | undefined}
*/
  bootstraps(): BootstrapWitnesses | undefined;
/**
* @returns {TransactionWitnessSet}
*/
  static new(): TransactionWitnessSet;
}
/**
*/
export class TransactionWitnessSets {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionWitnessSets}
*/
  static from_bytes(bytes: Uint8Array): TransactionWitnessSets;
/**
* @returns {TransactionWitnessSets}
*/
  static new(): TransactionWitnessSets;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionWitnessSet}
*/
  get(index: number): TransactionWitnessSet;
/**
* @param {TransactionWitnessSet} elem
*/
  add(elem: TransactionWitnessSet): void;
}
/**
*/
export class UnitInterval {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {UnitInterval}
*/
  static from_bytes(bytes: Uint8Array): UnitInterval;
/**
* @returns {BigNum}
*/
  numerator(): BigNum;
/**
* @returns {BigNum}
*/
  denominator(): BigNum;
/**
* @param {BigNum} numerator
* @param {BigNum} denominator
* @returns {UnitInterval}
*/
  static new(numerator: BigNum, denominator: BigNum): UnitInterval;
}
/**
*/
export class Update {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Update}
*/
  static from_bytes(bytes: Uint8Array): Update;
/**
* @returns {ProposedProtocolParameterUpdates}
*/
  proposed_protocol_parameter_updates(): ProposedProtocolParameterUpdates;
/**
* @returns {number}
*/
  epoch(): number;
/**
* @param {ProposedProtocolParameterUpdates} proposed_protocol_parameter_updates
* @param {number} epoch
* @returns {Update}
*/
  static new(proposed_protocol_parameter_updates: ProposedProtocolParameterUpdates, epoch: number): Update;
}
/**
*/
export class VRFCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {VRFCert}
*/
  static from_bytes(bytes: Uint8Array): VRFCert;
/**
* @returns {Uint8Array}
*/
  output(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  proof(): Uint8Array;
/**
* @param {Uint8Array} output
* @param {Uint8Array} proof
* @returns {VRFCert}
*/
  static new(output: Uint8Array, proof: Uint8Array): VRFCert;
}
/**
*/
export class VRFKeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {VRFKeyHash}
*/
  static from_bytes(bytes: Uint8Array): VRFKeyHash;
}
/**
*/
export class VRFVKey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {VRFVKey}
*/
  static from_bytes(bytes: Uint8Array): VRFVKey;
}
/**
*/
export class Vkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Vkey}
*/
  static from_bytes(bytes: Uint8Array): Vkey;
/**
* @param {PublicKey} pk
* @returns {Vkey}
*/
  static new(pk: PublicKey): Vkey;
/**
* @returns {PublicKey}
*/
  public_key(): PublicKey;
}
/**
*/
export class Vkeywitness {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Vkeywitness}
*/
  static from_bytes(bytes: Uint8Array): Vkeywitness;
/**
* @param {Vkey} vkey
* @param {Ed25519Signature} signature
* @returns {Vkeywitness}
*/
  static new(vkey: Vkey, signature: Ed25519Signature): Vkeywitness;
/**
* @returns {Vkey}
*/
  vkey(): Vkey;
/**
* @returns {Ed25519Signature}
*/
  signature(): Ed25519Signature;
}
/**
*/
export class Vkeywitnesses {
  free(): void;
/**
* @returns {Vkeywitnesses}
*/
  static new(): Vkeywitnesses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Vkeywitness}
*/
  get(index: number): Vkeywitness;
/**
* @param {Vkeywitness} elem
*/
  add(elem: Vkeywitness): void;
}
/**
*/
export class Withdrawals {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Withdrawals}
*/
  static from_bytes(bytes: Uint8Array): Withdrawals;
/**
* @returns {Withdrawals}
*/
  static new(): Withdrawals;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {RewardAddress} key
* @param {BigNum} value
* @returns {BigNum | undefined}
*/
  insert(key: RewardAddress, value: BigNum): BigNum | undefined;
/**
* @param {RewardAddress} key
* @returns {BigNum | undefined}
*/
  get(key: RewardAddress): BigNum | undefined;
/**
* @returns {RewardAddresses}
*/
  keys(): RewardAddresses;
}
