import { ref, Ref, reactive } from 'vue'

export default function useRoadmap() {
  const years = reactive([
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

  const roadmap = {
    '2023': {
      info: [
        {
          name: 'Q1-Q4',
          content: [
            'Release Kusama-Polkadot TEER bridge',
            'Release Hybrid Sidechain',
            'Bridge to other Ecosystems',
            'Deploy first enterprise PoCs',
          ],
        },
      ],
      type: 'long',
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
      type: 'long',
    },
  }

  function getYears() {
    return years
  }
  return { getYears }
}
