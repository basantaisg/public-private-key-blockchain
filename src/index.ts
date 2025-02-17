import * as ed from '@noble/ed25519';

async function main() {
  // Generate a secure random private key!
  const privKey = ed.utils.randomPrivateKey();

  //   converting the message "Basanta's World" to a Uint8Array

  const message = new TextEncoder().encode("Basanta's World");

  //   Generate a public key from the private key!
  const pubKey = await ed.getPublicKeyAsync(privKey);

  //   Sign the message!
  const signature = await ed.signAsync(message, privKey);

  //   Verify the signature!
  const isValidSignature = await ed.verifyAsync(signature, message, pubKey);

  // output the result

  console.log(isValidSignature);
}

main();
