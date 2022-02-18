import React from 'react';
import ReactDOM from 'react-dom';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DecompositionTree = () => {
  const data = {
    id: 'A0',
    value: {
      title: 'Devices',
      items: [
        {
          text: '200 devices',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: 'Reporting',
          items: [
            {
              text: '1152万',
            },
            {
              text: '',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: 'Site 1',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
            children: [
                { 
                    id: 'A11-A',
                    value: {
                        title: 'Access Point 1'
                    }
                }
            ]
          },
          {
            id: 'A12',
            value: {
              title: 'Site 2',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: 'Site 3',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: 'Not Reporting',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
    nodeCfg: {
        size: [160,40],
        title: {
            autoEllipsis: false,
        }
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DecompositionTree;
