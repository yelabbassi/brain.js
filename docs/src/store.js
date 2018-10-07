import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        title: 'Fast & GPU supported',
      },
      {
        title: 'Easy to Use',
      },
      {
        title: 'Async API',
      },
      {
        title: 'Export & Import Trained Models',
      },
      // {
      //   title: 'Multiple Neural Networks',
      // },
      // {
      //   title: 'Multiple Activation Functions',
      // },
      // {
      //   title: 'Customizeable Hidden Layers',
      // },
      {
        title: 'Cross Validation',
      },
      {
        title: 'Stream Training',
      },
      // {
      //   title: 'Customizeable',
      // },
      {
        title: 'Modular',
      },
    ],
    highlights: [
      {
        title: 'Simple to Use',
        description:
          'Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this. ',
        link: '//github.com/BrainJS/brain.js#examples',
      },
      {
        title: 'Based on GPU.js',
        description:
          'Brain.js performs computations using GPU and gracefully fallback to pure JavaSCript in Node.js or when GPU is not available.',
        link: '//github.com/gpujs/gpu.js',
      },
      {
        title: 'Multiple Neural Networks',
        description:
          'Brain.js provided multiple neural network implementations as different neural nets suited to do different things well.',
        link: '//github.com/BrainJS/brain.js#neural-network-types',
      },
      // {
      //   title: 'Activation Functions',
      //   description:
      //     'There are currently four supported activation functions, sigmoid being the default: sigmoid,relu,leaky-relu,tanh',
      //   link: '//github.com/BrainJS/brain.js#json',
      // },
      {
        title: 'Export & Import',
        description:
          'Easily export and import trained models to JSON format and as a function. Host pre-trained models on your website easily. ',
        link: '//github.com/BrainJS/brain.js#json',
      },
    ],
    networks: [
      {
        title: 'brain.NeuralNetwork',
        description: 'Feedforward Neural Network with backpropagation',
        link: 'https://en.wikipedia.org/wiki/Feedforward_neural_network',
      },
      {
        title: 'brain.recurrent.RNNTimeStep',
        description: 'Time Step Recurrent Neural Network or "RNN"',
        link: 'https://en.wikipedia.org/wiki/Recurrent_neural_network',
      },
      {
        title: 'brain.recurrent.LSTMTimeStep',
        description:
          'Time Step Long Short Term Memory Neural Network or "LSTM"',
        link: 'https://en.wikipedia.org/wiki/Long_short-term_memory',
      },
      {
        title: 'brain.recurrent.GRUTimeStep',
        description: 'Time Step Gated Recurrent Unit or "GRU"',
        link: 'https://en.wikipedia.org/wiki/Gated_recurrent_unit',
      },
      {
        title: 'brain.recurrent.RNN',
        description: 'Recurrent Neural Network or "RNN"',
        link: 'https://en.wikipedia.org/wiki/Recurrent_neural_network',
      },
      {
        title: 'brain.recurrent.LSTM',
        description: 'Long Short Term Memory Neural Network or "LSTM"',
        link: 'https://en.wikipedia.org/wiki/Long_short-term_memory',
      },
      {
        title: 'brain.recurrent.GRU',
        description: 'Gated Recurrent Unit or "GRU"',
        link: 'https://en.wikipedia.org/wiki/Gated_recurrent_unit',
      },
    ],
    tutorials: [
      {
        title: 'Learn more than numbers',
        description: '',
        author: 'Robert Plummer',
        link: 'https://scrimba.com/p/pVZJQfg/c2De2Tg',
      },
      {
        title: 'How to create a neural net in the browser with Brain.js',
        description: '',
        author: 'Per Harald Borgen',
        link: 'https://scrimba.com/c/c36zkcb',
      },
      {
        title: 'BRAIN.JS: NEURAL NETWORKS IN JAVASCRIPT',
        description: '',
        author: 'http://badassjs.com',
        link:
          'http://badassjs.com/post/729676907/brainjs-neural-networks-in-javascript',
      },
      {
        title: 'Neural Networks in JavaScript with Brain.js',
        description: '',
        author: 'Scott Robinson',
        link:
          'https://stackabuse.com/neural-networks-in-javascript-with-brain-js/',
      },
      {
        title: 'You can build a neural network in JavaScript',
        description: '',
        author: 'Daniel Simmons',
        link:
          'https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3',
      },
    ],
  },
  mutations: {},
  actions: {},
})
