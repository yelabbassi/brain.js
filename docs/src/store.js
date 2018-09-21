import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        title: 'Fast & WebGL supported',
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
      {
        title: 'Multiple Neural Networks',
      },
      {
        title: 'Multiple Activation Functions',
      },
      {
        title: 'Customizeable Hidden Layers',
      },
      {
        title: 'Cross Validation',
      },
      {
        title: 'Stream Training',
      },
      {
        title: 'Customizeable',
      },
    ],
    highlights: [
      {
        title: 'Based on GPU.js',
        description: 'Base don well konwn and test GPU.js',
        link: '',
      },
      {
        title: 'Easy to use API',
        description: '',
        link: '',
      },
      {
        title: 'Export & Import',
        description: '',
        link: '',
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
  },
  mutations: {},
  actions: {},
})
