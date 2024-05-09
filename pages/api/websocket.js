import {
  SimplePool,
  nip19,
  nip04,
  getPublicKey,
  getEventHash,
  getSignature
} from 'nostr-tools'

export default async (req, res) => {
  const pool = new SimplePool()
  const relays = [
    'wss://nos.lol',
    // 'wss://relay.damus.io',
    // 'wss://nostr21.com/',
    // 'wss://offchain.pub',
    // 'wss://nostr.thank.eu',
    // "wss://nostr.mom",
    // 'wss://nostr.oxtr.dev',
    // 'wss://nos.lol/',
    // 'wss://nostr.fmt.wiz.biz',
  ]
  console.log(pool)
  const events = await pool.querySync(relays, {
    authors: ['c060b31fe2bbb0be4d393bc7c40a80848a25b8f0e0f382cb5b49c37bf7476cb4'],
    kinds: [ 30_023 ]
  })
  console.log('events', events)
  pool.close(relays)

  res.send(events[0].content);
};