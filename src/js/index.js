import {Keypair} from './models/Keypair';

/**
 * Global state of the app
 * - List of keypairs
 * - Current keypair
 * - Signatures and verifications
 */
const state = {};

const createKeypair = () => {
  const entropy = '' // TODO

  const algorithm = document.querySelector('input[name="algorithm"]:checked').id;

  const keypair = new Keypair({algorithm});

  console.log(keypair);
}

document.querySelector('.create').addEventListener('submit', e => {
  e.preventDefault();
  createKeypair();
});
