require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember hospital imitate private flip ten'; 
let testAccounts = [
"0xf5ab5b26f1e419590df26f1d98e20ebd45f0fabd770d2e90dfd5fb049eac7891",
"0xf452b08d1c2ecdf87fb9913e4b220779ae2ede8db541f7ecc4b78693abc6c6b0",
"0x12ff32afcdd5259b467de4fe7a388bb55c3a14d39eb7523e7cee5a9456f4e495",
"0xf07e8b53b6beab8d32d513e4c493658904a7632f92c0b9f3f24c776c2e70b540",
"0x07ea6b9ff20a4f51c75823525a17174dfb70782c4f449e1e17a4739db43c3226",
"0xbc3e654c9f2dea34d4df7adb9c470a19cd8128c3263fc81a4d11fd25df6ff979",
"0x7044e81ad57a29161d03bb71f14c8d8bfb9283906541544539de72a854daa481",
"0x7dcd3633f86dfda5394a32558be771f07f5b0dd5ba092762635f2642b9ddf161",
"0x579b4a1bcf417f526459d5da1ff33fe14e8451d4b0d56518313341fe847238d9",
"0x5ae0d6f6172d672379f96923368fb6d32d1a3035fc7a50dfd28b93c2176fa3e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


