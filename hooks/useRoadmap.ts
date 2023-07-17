import { reactive } from 'vue'
import { objectEntries } from '@vueuse/core'
import map from 'lodash/map'

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
      year: '2023',
      active: true,
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
    '2023': {
      info: [
        {
          name: 'Q1',
          content: [
            'Release Kusama-Polkadot TEER bridge',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Release Hybrid Sidechain',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Bridge to other Ecosystems',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Deploy first enterprise PoCs',
          ],
        },
      ],
      active: true,
    },
    '2022': {
      info: [
        {
          name: 'Q1',
          content: [
            'Secure Kusama slot',
            'Release Sidechain Demo ',
            '2nd Exchange Listing ',
            'Finish strategic planning for 2022',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Migration from Solo to Kusama Parachain',
            'XCM Integrations with other projects',
            'Release Sidechain SDK v 1.0',
            'Release of Sidechains with Smart Contracts',
            'Release of generic trusted oracle framework',
            'Deploy first end client usable App',
            'Forge partnerships with international institutions and universities',
            'Release of Securitee Solution on OVH Marketplace',
            '3rd Exchange Listing',
            'Network Decentralization: Remove Sudo and enable coin voting with TEER',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release Sidechain SDK v 1.1',
            'Issue Treasury grants to expand the Integritee ecosystem and community',
            'Expand to more countries and create new local communities',
            'Implement final fee burning and lockdrop mechanisms',
            'Release of Attesteer',
            'Forge partnerships with new projects',
            '4th Exchange Listing',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Release Sidechain SDK v 1.2',
            'Establish a multi-environment TEER token',
            'Release of Securitee Sidechain as a Service',
            'Forge partnerships with new projects',
            '5th Exchange Listing',
            'Secure Polkadot Parachain slot',
            'Establish Integritee as the leading Polkadot privacy solution.',
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
            'Launch Rococo Testnet Parachain',
            'Conceptualize and Preparation of Spin-off',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Spin-off from SCS and birth of Integritee AG',
            'Seed Round Close',
          ],
        },
        {
          name: 'Q3',
          content: [
            'New Brand and Website relaunch',
            'Move from SubstraTEE to Integritee',
            'Release Tokenomics',
            'Participation in public slot auctions on Kusama',
            'Mainnet & Token Launch',
            'Start of Community Growth',
          ],
        },
        {
          name: 'Q4',
          content: [
            'First deployment and practical use case hosted on the Integritee mainnet will be launched: the US dollar exchange rate oracle.',
            'List TEER on major exchange',
            'Start of Integritee Ambassador Program',
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
            'Development Prototype Platform based on SubstraTEE.',
            'First deployed and running use case with Encointer on the Platform',
          ],
        },
        {
          name: 'Q4',
          content: ['Polkadot Treasury Grant “SubstraTEE scalability”'],
        },
      ],
      active: false,
    },
    '2019': {
      info: [
        {
          name: 'Q1',
          content: [
            '1st Web3 Grant for: Substrate Transaction Privacy using Intel SGX',
          ],
        },
        {
          name: 'Q3',
          content: ['2nd Web3 Grant for: Substrate Rust API client'],
        },
        {
          name: 'Q4',
          content: [
            'First SubstraTEE Meetup to demonstrate private token transactions.',
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
            'Release of the Encointer Whitepaper – “Local Community Cryptocurrencies with Universal Basic Income” and start of the SubstraTEE journey',
          ],
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
