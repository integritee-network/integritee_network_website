import { objectEntries } from '@vueuse/core'
import map from 'lodash/map'
import { reactive } from 'vue'

interface Year {
  year: string
  active: boolean
}

interface Roadmap {
  [key: string]: {
    info: {
      name: string
      content: string[]
      type?: 'long'
    }[]
    active: boolean
  }
}

export default function useRoadmap() {
  const years = reactive<Year[]>([
    {
      year: '2026',
      active: true,
    },
    {
      year: '2025',
      active: true,
    },
    {
      year: '2024',
      active: false,
    },
    {
      year: '2023',
      active: false,
    },
    {
      year: '2022',
      active: false,
    },
    {
      year: '2021',
      active: false,
    },
    {
      year: '2020',
      active: false,
    },
    {
      year: '2019',
      active: false,
    },
    {
      year: '2018',
      active: false,
    },
  ])

  const roadmap = reactive<Roadmap>({
    '2026': {
      info: [
        {
          name: 'Q1-Q4',
          content: [
            'Release sidechain SDK v 1.0.0',
            'Release of Incognitee mainnet stable production version',
            'Launch of Incognitee mainnet on Ethereum and other ERC compatible chains',
            'Launch of Incognitee on other parachains',
            'Launch of Incognitee on other chains like Cardano, Avalanche',
            'Integration of Incognitee with other wallets',
            'Onboard 3rd-party validateers for Incognitee',
            'Launch TEERday nomination of validateers for Incognitee',
            'TEER other ERC compatible chains',
            'Launch of referral campaign',
          ],
          type: 'long',
        },
      ],
      active: true,
    },
    '2025': {
      info: [
        {
          name: 'Q1',
          content: [
            'Release sidechain SDK v0.15.7/8/9/10/12/13',
            'Release sidechain SDK v0.16.0/1/2/3',
            'Launch of Incognitee mainnet on Polkadot Asset Hub as beta deployment',
            
          ],
        },
        {
          name: 'Q2',
          content: [
            'Limited TEER on Ethereum',
            'Release sidechain SDK v0.16.4/5/6/7',
            'Release of Incognitee feature W2W Messaging',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release sidechain SDK v0.17.0',
            'Release of Incognitee feature AI Messaging',
            'Bridge TEER from Kusama parachain to Polkadot parachain',
        
          ],
        },
        {
          name: 'Q4',
          content: [
            'TEER Hydration DEX listing',
            'TEER Uniswap DEX listing',
            'TEER on Ethereum',
            'Release of new Incognitee Omnichat',
          ],
        },
      ],
      active: true,
    },
    '2024': {
      info: [
        {
          name: 'Q1',
          content: [
            'Launch of Incognitee public testnet',
            'Launch of public referenda for TEER holders',
            'Payout of first treasury grant',
            'Listing on Basilisk DEX',
            'Presentation of randomness oracle at Polkadot Sub0',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Launch of Incognitee user & bounty campaign',
            'Launch of treasury grant program',
            'Release sidechain SDK v0.13.0',
            'Release of unpermissioned collators',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release sidechain SDK v0.14.0',
            'Presenting Incognitee at Polkadot Decoded',
            'Launch of Incognitee TEERdays campaign',
            'TEER available on Telenova Telegram app',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Ledger support for Integritee Network',
            'Launch of Incognitee in beta on Integriee Network mainnet',
            'Release sidechain SDK v0.15.0/1/2/3/4/5',
            'Launch of Incognitee vouchers feature',
            'Launch of Incognitee private messaging feature',
            'Launch of guess-the-number contest',
            'Launch of TEE-Quest campaign',
          ],
        },
      ],
      active: false,
    },
    '2023': {
      info: [
        {
          name: 'Q1',
          content: [
            'Partnership with OLI Systems',
            'Participation in WEF in Davos',
            'Release sidechain SDK v0.11.0',
            'Release of generic trusted oracle framework',
            'Release of Securitee Confidential Computing Platform',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Partnership with Enclaive',
            'Participation in Polkadot India Now and Polkadot Decoded',
            'Launch of Integritee governance platform on Polkassembly',
            'Release of sidechain SDK v0.12.0',
            'Release of Teeracle as add-on on Securitee platorm',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release of DCAP attestation on Integritee Network',
            'Release of Attesteer service for TEEs via API',
            'Integration of Attesteer service with Securitee',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Brand Refresh and new website launched',
            'Acceptance to Tech4Trust accelerator season 5',
            'Release of privacy sidechain demo',
            'Release of Incognitee public testnet',
          ],
        },
      ],
      active: false,
    },
    '2022': {
      info: [
        {
          name: 'Q1',
          content: [
            'Kusama parachain slot secured',
            'Release of sidechain demo',
            'Collaboration with OVH Cloud and Intel',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Migration from Solo to Kusama parachain',
            'Release of Sidechains Benchmark',
            'Network Decentralization: Remove Sudo and enable coin voting with TEER',
            'Listing on Kraken Exchange',
          ],
        },
        {
          name: 'Q3',
          content: [
            'XCM Integration with Karura and Moonriver',
            'Polkadot parachain slot secured',
            'Partnership with Crust',
            'Release of sidechain SDK v0.9.0',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Partnership and XCM Integration with Bifrost',
            'Release of sidechain SDK v0.10.0',
            'PoC for EVM compatible Sidechains',
          ],
        },
      ],
      active: false,
    },
    '2021': {
      info: [
        {
          name: 'Q1',
          content: [
            'Launch Rococo testnet parachain',
            'Conceptualize and preparation of spin-off',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Spin-off from SCS and birth of Integritee AG',
            'Seed round close',
          ],
        },
        {
          name: 'Q3',
          content: [
            'New brand and website relaunch',
            'Move from SubstraTEE to Integritee',
            'Release tokenomics paper',
            'Participation in public slot auctions on Kusama',
            'Start of community growth',
            'Series A round close',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Mainnet & token launch',
            'First deployment and practical use case hosted on the Integritee mainnet: the US dollar exchange rate oracle',
            'List TEER on major exchange Gate',
            'Start of Integritee ambassador program',
            'Partnership with Ajuna, KILT, Fractal',
          ],
        },
      ],
      active: false,
    },
    '2020': {
      info: [
        {
          name: 'Q1',
          content: ['3rd Web3 Grant for: SubstraTEE extension pack'],
        },
        {
          name: 'Q2-Q3',
          content: [
            'Development of prototype platform based on SubstraTEE.',
            'First deployed and running use case with Encointer on the platform',
          ],
        },
        {
          name: 'Q4',
          content: ['Polkadot treasury grant “SubstraTEE scalability”'],
        },
      ],
      active: false,
    },
    '2019': {
      info: [
        {
          name: 'Q1',
          content: [
            '1st Web3 grant for: Substrate transaction privacy using Intel SGX',
          ],
        },
        {
          name: 'Q3',
          content: ['2nd Web3 grant for: Substrate Rust API client'],
        },
        {
          name: 'Q4',
          content: [
            'First SubstraTEE meetup to demonstrate private token transactions.',
          ],
        },
      ],
      active: false,
    },
    '2018': {
      info: [
        {
          name: 'Q4',
          content: [
            `Release of the Encointer whitepaper – “Local Community Cryptocurrencies with Universal Basic Income” and start of the SubstraTEE journey`,
          ],
          type: 'long',
        },
      ],
      active: false,
    },
  })

  function setActive(year: string) {
    map(roadmap, (item) => {
      item.active = false
    })
    roadmap[year].active = true

    const activeYear = years.find((item) => item.year === year)
    if (activeYear) {
      map(years, (item) => {
        item.active = false
      })
      activeYear.active = true
    }
  }

  function getYears() {
    return years
  }

  function getInfoList() {
    const sort = objectEntries(roadmap)
      .map((item) => item[1])
      .reverse()
    return sort
  }

  return { getYears, getInfoList, setActive }
}
