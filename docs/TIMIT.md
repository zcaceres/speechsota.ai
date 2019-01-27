
## TIMIT


| PER     | Paper  | Published | Notes   |
| :------ | :----- | :-------- | :-----: |
| 16.5%   | [Phone recognition with hierarchical convolutional deep maxout networks](https://link.springer.com/content/pdf/10.1186%2Fs13636-015-0068-3.pdf) | Sept 2015 | Hierarchical maxout CNN + Dropout |
| 16.5%   | [A Regularization Post Layer: An Additional Way how to Make Deep Neural Networks Robust](https://www.researchgate.net/profile/Jan_Vanek/publication/320038040_A_Regularization_Post_Layer_An_Additional_Way_How_to_Make_Deep_Neural_Networks_Robust/links/59f97fffaca272607e2f804a/A-Regularization-Post-Layer-An-Additional-Way-How-to-Make-Deep-Neural-Networks-Robust.pdf) | 2017 | DBN with last layer regularization |
| 16.7%   | [Combining Time- and Frequency-Domain Convolution in Convolutional Neural Network-Based Phone Recognition](http://www.inf.u-szeged.hu/~tothl/pubs/ICASSP2014.pdf) | 2014 | CNN in time and frequency + dropout, 17.6% w/o dropout |
| 17.3%   | [Segmental Recurrent Neural Networks for End-to-end Speech Recognition](https://arxiv.org/abs/1603.00223) | Mar 2016 | RNN-CRF on 24(x3) MFSC |
| 17.6%   | [Attention-Based Models for Speech Recognition](http://arxiv.org/abs/1506.07503) | Jun 2015 | Bi-RNN + Attention |
| 17.7%   | [Speech Recognition with Deep Recurrent Neural Networks](http://arxiv.org/abs/1303.5778v1) | Mar 2013 | Bi-LSTM + skip connections w/ RNN transducer (18.4% with CTC only) |
| 18.0%   | [Learning Filterbanks from Raw Speech for Phone Recognition](https://arxiv.org/abs/1711.01161) | Oct 2017 | Complex ConvNets on raw speech w/ mel-fbanks init |
| 18.8%   | [Wavenet: A Generative Model For Raw Audio](https://arxiv.org/pdf/1609.03499.pdf) | Sept 2016 | Wavenet architecture with mean pooling layer after residual block + few non-causal conv layers |
| 23%     | [Deep Belief Networks for Phone Recognition](http://www.cs.toronto.edu/~asamir/papers/NIPS09.pdf) | 2009 | (first, modern) HMM-DBN |
