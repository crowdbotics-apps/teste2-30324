import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_352}>
        <View style={styles.View_I2_352_1_3} />
        <View style={styles.View_I2_352_1_4} />
        <View style={styles.View_I2_352_1_5} />
        <View style={styles.View_I2_352_1_99}>
          <View style={styles.View_I2_352_1_100} />
          <View style={styles.View_I2_352_1_101} />
          <View style={styles.View_I2_352_1_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/982f/e5fb/0431165040cd20f797b8a4ba5c95a501"
              }}
              style={styles.ImageBackground_I2_352_1_103}
            />
            <View style={styles.View_I2_352_1_104}>
              <Text style={styles.Text_I2_352_1_104}>Explore All</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_105}>
            <View style={styles.View_I2_352_1_106}>
              <Text style={styles.Text_I2_352_1_106}>Our Features</Text>
            </View>
            <View style={styles.View_I2_352_1_107}>
              <Text style={styles.Text_I2_352_1_107}>
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_108}>
            <Text style={styles.Text_I2_352_1_108}>Work Load</Text>
          </View>
          <View style={styles.View_I2_352_1_109}>
            <Text style={styles.Text_I2_352_1_109}>Learn More</Text>
          </View>
          <View style={styles.View_I2_352_1_110}>
            <Text style={styles.Text_I2_352_1_110}>
              Outward clothes promise at gravity do excited. Sufficient
              particular impossible by reasonable oh expression is. Yet
              preference connection unpleasant yet melancholy but end
              appearance.
            </Text>
          </View>
          <View style={styles.View_I2_352_1_111}>
            <View style={styles.View_I2_352_1_112} />
            <View style={styles.View_I2_352_1_113}>
              <Text style={styles.Text_I2_352_1_113}>Time Tracking</Text>
            </View>
            <View style={styles.View_I2_352_1_114}>
              <Text style={styles.Text_I2_352_1_114}>Learn More</Text>
            </View>
            <View style={styles.View_I2_352_1_115}>
              <Text style={styles.Text_I2_352_1_115}>
                Outward clothes promise at gravity do excited. Sufficient
                particular impossible by reasonable oh expression is. Yet
                preference connection unpleasant yet melancholy but end
                appearance.
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_116}>
            <View style={styles.View_I2_352_1_117} />
            <View style={styles.View_I2_352_1_118}>
              <Text style={styles.Text_I2_352_1_118}>Collaborations</Text>
            </View>
            <View style={styles.View_I2_352_1_119}>
              <Text style={styles.Text_I2_352_1_119}>Learn More</Text>
            </View>
            <View style={styles.View_I2_352_1_120}>
              <Text style={styles.Text_I2_352_1_120}>
                Outward clothes promise at gravity do excited. Sufficient
                particular impossible by reasonable oh expression is. Yet
                preference connection unpleasant yet melancholy but end
                appearance.
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_121}>
            <View style={styles.View_I2_352_1_122} />
            <View style={styles.View_I2_352_1_123}>
              <Text style={styles.Text_I2_352_1_123}>Kanban</Text>
            </View>
            <View style={styles.View_I2_352_1_124}>
              <Text style={styles.Text_I2_352_1_124}>Learn More</Text>
            </View>
            <View style={styles.View_I2_352_1_125}>
              <Text style={styles.Text_I2_352_1_125}>
                Outward clothes promise at gravity do excited. Sufficient
                particular impossible by reasonable oh expression is. Yet
                preference connection unpleasant yet melancholy but end appearan
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_352_1_126}>
          <View style={styles.View_I2_352_1_127}>
            <View style={styles.View_I2_352_1_128}>
              <Text style={styles.Text_I2_352_1_128}>What Clients Say</Text>
            </View>
            <View style={styles.View_I2_352_1_129}>
              <Text style={styles.Text_I2_352_1_129}>
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_130}>
            <View style={styles.View_I2_352_1_131}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8926/8b09/0e0c2c48feae0546336307782bbed74d"
                }}
                style={styles.ImageBackground_I2_352_1_132}
              />
              <View style={styles.View_I2_352_1_133} />
            </View>
            <View style={styles.View_I2_352_1_134}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ab7/8b24/22cd8d680094296882a132fc03e9e4a4"
                }}
                style={styles.ImageBackground_I2_352_1_135}
              />
              <View style={styles.View_I2_352_1_136} />
            </View>
          </View>
          <View style={styles.View_I2_352_1_137}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38da/5422/011f345b4503aee8c27232bc197542e7"
              }}
              style={styles.ImageBackground_I2_352_1_138}
            />
            <View style={styles.View_I2_352_1_139} />
            <View style={styles.View_I2_352_1_140}>
              <View style={styles.View_I2_352_1_141}>
                <Text style={styles.Text_I2_352_1_141}>Best Developers</Text>
              </View>
              <View style={styles.View_I2_352_1_142}>
                <Text style={styles.Text_I2_352_1_142}>Robert Johnson</Text>
              </View>
              <View style={styles.View_I2_352_1_143}>
                <Text style={styles.Text_I2_352_1_143}>
                  Director at Behance
                </Text>
              </View>
              <View style={styles.View_I2_352_1_144}>
                <Text style={styles.Text_I2_352_1_144}>
                  Outward clothes promise at gravity do excited. Sufficient
                  particular impossible by reasonable oh expression is. Yet
                  preference connection unpleasant yet melancholy but end
                  appearance. And excellence partiality estimating terminated
                  day everything.
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a83f/f89b/bacd551c373ca1fb3f5e3d864436ced1"
                }}
                style={styles.ImageBackground_I2_352_1_145}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I2_352_1_151}>
          <View style={styles.View_I2_352_1_152}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/982f/e5fb/0431165040cd20f797b8a4ba5c95a501"
              }}
              style={styles.ImageBackground_I2_352_1_153}
            />
            <View style={styles.View_I2_352_1_154}>
              <Text style={styles.Text_I2_352_1_154}>Explore All</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_155}>
            <View style={styles.View_I2_352_1_156}>
              <Text style={styles.Text_I2_352_1_156}>Best Services</Text>
            </View>
            <View style={styles.View_I2_352_1_157}>
              <Text style={styles.Text_I2_352_1_157}>
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_158}>
            <View style={styles.View_I2_352_1_159}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0592/5626/02e0e9ba0828c8fc4660666615ff9663"
                }}
                style={styles.ImageBackground_I2_352_1_160}
              />
              <View style={styles.View_I2_352_1_329} />
              <View style={styles.View_I2_352_1_161}>
                <Text style={styles.Text_I2_352_1_161}>Web Development</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8fc/0459/7146b9f578f2ef11ae81bb264424db72"
                }}
                style={styles.ImageBackground_I2_352_1_162}
              />
            </View>
            <View style={styles.View_I2_352_1_168}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fec7/0315/ce3ba26a9a2b8d788289aedbd66d2db3"
                }}
                style={styles.ImageBackground_I2_352_1_169}
              />
              <View style={styles.View_I2_352_1_326} />
              <View style={styles.View_I2_352_1_170}>
                <Text style={styles.Text_I2_352_1_170}>Web Designing</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8fc/0459/7146b9f578f2ef11ae81bb264424db72"
                }}
                style={styles.ImageBackground_I2_352_1_171}
              />
            </View>
            <View style={styles.View_I2_352_1_177}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a522/0d46/33f1640f484632345b4e57d546bc0efb"
                }}
                style={styles.ImageBackground_I2_352_1_178}
              />
              <View style={styles.View_I2_352_1_328} />
              <View style={styles.View_I2_352_1_179}>
                <Text style={styles.Text_I2_352_1_179}>
                  Database Management
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8fc/0459/7146b9f578f2ef11ae81bb264424db72"
                }}
                style={styles.ImageBackground_I2_352_1_180}
              />
            </View>
            <View style={styles.View_I2_352_1_186}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c6e/fe7d/e75a6f605f9af96abc8dfc2e5ac70bef"
                }}
                style={styles.ImageBackground_I2_352_1_187}
              />
              <View style={styles.View_I2_352_1_327} />
              <View style={styles.View_I2_352_1_188}>
                <Text style={styles.Text_I2_352_1_188}>SEO</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8fc/0459/7146b9f578f2ef11ae81bb264424db72"
                }}
                style={styles.ImageBackground_I2_352_1_189}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I2_352_1_195} />
        <View style={styles.View_I2_352_1_196}>
          <View style={styles.View_I2_352_1_197}>
            <Text style={styles.Text_I2_352_1_197}>FAQs</Text>
          </View>
          <View style={styles.View_I2_352_1_198}>
            <View style={styles.View_I2_352_1_199} />
            <View style={styles.View_I2_352_1_200}>
              <View style={styles.View_I2_352_1_201}>
                <Text style={styles.Text_I2_352_1_201}>
                  she met humoured sir breeding her. Six curiosity day assurance
                  bed necessary.
                </Text>
              </View>
              <View style={styles.View_I2_352_1_202}>
                <Text style={styles.Text_I2_352_1_202}>
                  Relation so in confined smallest children unpacked delicate.
                  Why sir end believe uncivil respect. Always get adieus nature
                  day course for common. My little garret repair to desire he
                  esteem.
                </Text>
              </View>
              <View style={styles.View_I2_352_1_203} />
            </View>
          </View>
          <View style={styles.View_I2_352_1_204}>
            <View style={styles.View_I2_352_1_205} />
            <View style={styles.View_I2_352_1_206}>
              <View style={styles.View_I2_352_1_207}>
                <Text style={styles.Text_I2_352_1_207}>
                  And excellence partiality estimating terminated day
                  everything?
                </Text>
              </View>
              <View style={styles.View_I2_352_1_208}>
                <View style={styles.View_I2_352_1_209} />
                <View style={styles.View_I2_352_1_210} />
              </View>
            </View>
          </View>
          <View style={styles.View_I2_352_1_211}>
            <View style={styles.View_I2_352_1_212} />
            <View style={styles.View_I2_352_1_213}>
              <View style={styles.View_I2_352_1_214}>
                <Text style={styles.Text_I2_352_1_214}>
                  Latter person am secure of estate genius at?
                </Text>
              </View>
              <View style={styles.View_I2_352_1_215}>
                <View style={styles.View_I2_352_1_216} />
                <View style={styles.View_I2_352_1_217} />
              </View>
            </View>
          </View>
          <View style={styles.View_I2_352_1_218}>
            <View style={styles.View_I2_352_1_219} />
            <View style={styles.View_I2_352_1_220}>
              <View style={styles.View_I2_352_1_221}>
                <Text style={styles.Text_I2_352_1_221}>
                  Whatever landlord yourself at by pleasure of children be?
                </Text>
              </View>
              <View style={styles.View_I2_352_1_222}>
                <View style={styles.View_I2_352_1_223} />
                <View style={styles.View_I2_352_1_224} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_352_1_225}>
          <View style={styles.View_I2_352_1_226}>
            <View style={styles.View_I2_352_1_227}>
              <View style={styles.View_I2_352_1_228} />
              <View style={styles.View_I2_352_1_229}>
                <View style={styles.View_I2_352_1_230} />
                <View style={styles.View_I2_352_1_231}>
                  <Text style={styles.Text_I2_352_1_231}>Request Demo</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_232}>
                <Text style={styles.Text_I2_352_1_232}>For Starter</Text>
              </View>
              <View style={styles.View_I2_352_1_233}>
                <Text style={styles.Text_I2_352_1_233}>$59</Text>
              </View>
              <View style={styles.View_I2_352_1_234}>
                <View style={styles.View_I2_352_1_235}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                    }}
                    style={styles.ImageBackground_I2_352_1_236}
                  />
                  <View style={styles.View_I2_352_1_237}>
                    <Text style={styles.Text_I2_352_1_237}>
                      Feedback Categorization
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_238}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                    }}
                    style={styles.ImageBackground_I2_352_1_239}
                  />
                  <View style={styles.View_I2_352_1_240}>
                    <Text style={styles.Text_I2_352_1_240}>
                      Features prioritization
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_241}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                    }}
                    style={styles.ImageBackground_I2_352_1_242}
                  />
                  <View style={styles.View_I2_352_1_243}>
                    <Text style={styles.Text_I2_352_1_243}>
                      Real-time collaboration
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_244}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                    }}
                    style={styles.ImageBackground_I2_352_1_245}
                  />
                  <View style={styles.View_I2_352_1_246}>
                    <Text style={styles.Text_I2_352_1_246}>
                      Feedback loop notifications
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_247}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                    }}
                    style={styles.ImageBackground_I2_352_1_248}
                  />
                  <View style={styles.View_I2_352_1_249}>
                    <Text style={styles.Text_I2_352_1_249}>
                      Essential dev tools integrations
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_352_1_250}>
              <View style={styles.View_I2_352_1_251} />
              <View style={styles.View_I2_352_1_252}>
                <View style={styles.View_I2_352_1_253} />
                <View style={styles.View_I2_352_1_254}>
                  <Text style={styles.Text_I2_352_1_254}>Request Demo</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_255}>
                <Text style={styles.Text_I2_352_1_255}>For Teams</Text>
              </View>
              <View style={styles.View_I2_352_1_256}>
                <Text style={styles.Text_I2_352_1_256}>$99</Text>
              </View>
              <View style={styles.View_I2_352_1_257}>
                <View style={styles.View_I2_352_1_258}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b8/ec70/c98c029c096a691d4077b2f3adf96d1f"
                    }}
                    style={styles.ImageBackground_I2_352_1_259}
                  />
                  <View style={styles.View_I2_352_1_260}>
                    <Text style={styles.Text_I2_352_1_260}>
                      Feedback Categorization
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_261}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b8/ec70/c98c029c096a691d4077b2f3adf96d1f"
                    }}
                    style={styles.ImageBackground_I2_352_1_262}
                  />
                  <View style={styles.View_I2_352_1_263}>
                    <Text style={styles.Text_I2_352_1_263}>
                      Features prioritization
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_264}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b8/ec70/c98c029c096a691d4077b2f3adf96d1f"
                    }}
                    style={styles.ImageBackground_I2_352_1_265}
                  />
                  <View style={styles.View_I2_352_1_266}>
                    <Text style={styles.Text_I2_352_1_266}>
                      Real-time collaboration
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_267}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b8/ec70/c98c029c096a691d4077b2f3adf96d1f"
                    }}
                    style={styles.ImageBackground_I2_352_1_268}
                  />
                  <View style={styles.View_I2_352_1_269}>
                    <Text style={styles.Text_I2_352_1_269}>
                      Feedback loop notifications
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_270}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b8/ec70/c98c029c096a691d4077b2f3adf96d1f"
                    }}
                    style={styles.ImageBackground_I2_352_1_271}
                  />
                  <View style={styles.View_I2_352_1_272}>
                    <Text style={styles.Text_I2_352_1_272}>
                      Essential dev tools integrations
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I2_352_1_273}>
              <View style={styles.View_I2_352_1_274} />
              <View style={styles.View_I2_352_1_275}>
                <View style={styles.View_I2_352_1_276} />
                <View style={styles.View_I2_352_1_277}>
                  <Text style={styles.Text_I2_352_1_277}>Contact Us</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_278}>
                <Text style={styles.Text_I2_352_1_278}>For Company</Text>
              </View>
              <View style={styles.View_I2_352_1_279}>
                <Text style={styles.Text_I2_352_1_279}>Custom</Text>
              </View>
              <View style={styles.View_I2_352_1_280}>
                <View style={styles.View_I2_352_1_281}>
                  <View style={styles.View_I2_352_1_282}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                      }}
                      style={styles.ImageBackground_I2_352_1_283}
                    />
                    <View style={styles.View_I2_352_1_284}>
                      <Text style={styles.Text_I2_352_1_284}>
                        Feedback Categorization
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_285}>
                  <View style={styles.View_I2_352_1_286}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                      }}
                      style={styles.ImageBackground_I2_352_1_287}
                    />
                    <View style={styles.View_I2_352_1_288}>
                      <Text style={styles.Text_I2_352_1_288}>
                        Feedback loop notifications
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_289}>
                  <View style={styles.View_I2_352_1_290}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44b1/43ed/89a85833b435c4a9ac1d513aab0e05a3"
                      }}
                      style={styles.ImageBackground_I2_352_1_291}
                    />
                    <View style={styles.View_I2_352_1_292}>
                      <Text style={styles.Text_I2_352_1_292}>
                        Essential dev tools integrations
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I2_352_1_293}>
            <Text style={styles.Text_I2_352_1_293}>Our Pricing Plan</Text>
          </View>
        </View>
        <View style={styles.View_I2_352_1_294}>
          <View style={styles.View_I2_352_1_295} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89cc/25c4/da62b9f3094a0a0d3c8c6c5b4c27f28b"
            }}
            style={styles.ImageBackground_I2_352_1_296}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c709/fcd8/a7be8ecb5368b40b969497f2a0c2e8da"
            }}
            style={styles.ImageBackground_I2_352_1_297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df43/012c/b0ffe4e28151c747318da3d6ed34c966"
            }}
            style={styles.ImageBackground_I2_352_1_298}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d56/c2ca/7f3f24b6f9490e2458282b61a30b85cb"
            }}
            style={styles.ImageBackground_I2_352_1_299}
          />
          <View style={styles.View_I2_352_1_300}>
            <Text style={styles.Text_I2_352_1_300}>
              © 2021 Payme. All rights reserved
            </Text>
          </View>
          <View style={styles.View_I2_352_1_301}>
            <Text style={styles.Text_I2_352_1_301}>
              {" "}
              People who are ready took these courses!
            </Text>
          </View>
          <View style={styles.View_I2_352_1_302}>
            <View style={styles.View_I2_352_1_303} />
            <View style={styles.View_I2_352_1_304}>
              <Text style={styles.Text_I2_352_1_304}>Schedule demo</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_305}>
            <View style={styles.View_I2_352_1_306}>
              <Text style={styles.Text_I2_352_1_306}>Links</Text>
            </View>
            <View style={styles.View_I2_352_1_307}>
              <Text style={styles.Text_I2_352_1_307}>Overons</Text>
            </View>
            <View style={styles.View_I2_352_1_308}>
              <Text style={styles.Text_I2_352_1_308}>Social Media</Text>
            </View>
            <View style={styles.View_I2_352_1_309}>
              <Text style={styles.Text_I2_352_1_309}>Counters</Text>
            </View>
            <View style={styles.View_I2_352_1_310}>
              <Text style={styles.Text_I2_352_1_310}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_311}>
            <View style={styles.View_I2_352_1_312}>
              <Text style={styles.Text_I2_352_1_312}>
                Terms &amp; Conditions
              </Text>
            </View>
            <View style={styles.View_I2_352_1_313}>
              <Text style={styles.Text_I2_352_1_313}>Privacy Policy</Text>
            </View>
            <View style={styles.View_I2_352_1_314}>
              <Text style={styles.Text_I2_352_1_314}>Contact</Text>
            </View>
            <View style={styles.View_I2_352_1_315}>
              <Text style={styles.Text_I2_352_1_315}>Company</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_316}>
            <View style={styles.View_I2_352_1_317}>
              <Text style={styles.Text_I2_352_1_317}>
                Crechterwoord K12 182 DK Alknjkcb
              </Text>
            </View>
            <View style={styles.View_I2_352_1_318}>
              <Text style={styles.Text_I2_352_1_318}>085-132567</Text>
            </View>
            <View style={styles.View_I2_352_1_319}>
              <Text style={styles.Text_I2_352_1_319}>info@payme.net</Text>
            </View>
            <View style={styles.View_I2_352_1_320}>
              <Text style={styles.Text_I2_352_1_320}>Get in touch</Text>
            </View>
          </View>
          <View style={styles.View_I2_352_1_321}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ad/d810/c1d17ef53cfaf2a0fe05286719dce775"
              }}
              style={styles.ImageBackground_I2_352_1_322}
            />
            <View style={styles.View_I2_352_1_323}>
              <Text style={styles.Text_I2_352_1_323}>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I2_352_2_348}>
          <View style={styles.View_I2_352_1_6}>
            <View style={styles.View_I2_352_1_7}>
              <View style={styles.View_I2_352_1_8}>
                <View style={styles.View_I2_352_1_9}>
                  <Text style={styles.Text_I2_352_1_9}>Home</Text>
                </View>
                <View style={styles.View_I2_352_1_10}>
                  <Text style={styles.Text_I2_352_1_10}>About</Text>
                </View>
                <View style={styles.View_I2_352_1_11}>
                  <Text style={styles.Text_I2_352_1_11}>Testimonials</Text>
                </View>
                <View style={styles.View_I2_352_1_12}>
                  <Text style={styles.Text_I2_352_1_12}>Contact</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_13}>
                <View style={styles.View_I2_352_1_14}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/360f/c28f/f629870b5ede8c468967cfd8e34874e6"
                    }}
                    style={styles.ImageBackground_I2_352_1_15}
                  />
                  <View style={styles.View_I2_352_1_16}>
                    <Text style={styles.Text_I2_352_1_16}>Sign up</Text>
                  </View>
                </View>
                <View style={styles.View_I2_352_1_17}>
                  <Text style={styles.Text_I2_352_1_17}>Sign in</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_18}>
                <Text style={styles.Text_I2_352_1_18}>Payme</Text>
              </View>
            </View>
            <View style={styles.View_I2_352_1_19}>
              <View style={styles.View_I2_352_1_20}>
                <Text style={styles.Text_I2_352_1_20}>
                  Providing Best WEB Services
                </Text>
              </View>
              <View style={styles.View_I2_352_1_21}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f264/cdf0/827d09e5919710d1d2aba2e39f7f4735"
                  }}
                  style={styles.ImageBackground_I2_352_1_22}
                />
                <View style={styles.View_I2_352_1_23}>
                  <Text style={styles.Text_I2_352_1_23}>Get Started</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_24}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/fe3e/08250bdce06277eb674e43909a33172b"
                  }}
                  style={styles.ImageBackground_I2_352_1_25}
                />
                <View style={styles.View_I2_352_1_26}>
                  <Text style={styles.Text_I2_352_1_26}>Explore</Text>
                </View>
              </View>
              <View style={styles.View_I2_352_1_27}>
                <Text style={styles.Text_I2_352_1_27}>
                  Letter of on become he tended active enable to. Vicinity
                  relation sensible sociable surprise screened no up as.
                </Text>
              </View>
            </View>
            <View style={styles.View_I2_352_1_28}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ba0/1977/9ad628d8d1a11dfa6c2efc028cdeaab7"
                }}
                style={styles.ImageBackground_I2_352_1_29}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4281/32d1/490c9f604037bd32dfa3a47c264c2505"
                }}
                style={styles.ImageBackground_I2_352_2_332}
              />
            </View>
          </View>
          <View style={styles.View_I2_352_2_335}>
            <View style={styles.View_I2_352_2_336}>
              <View style={styles.View_I2_352_2_337} />
              <View style={styles.View_I2_352_2_338} />
            </View>
            <View style={styles.View_I2_352_2_339}>
              <View style={styles.View_I2_352_2_340} />
              <View style={styles.View_I2_352_2_341} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/541a/b424/f055cb031736ff8c9bbf08c2401673c6"
              }}
              style={styles.ImageBackground_I2_352_2_349}
            />
            <View style={styles.View_I2_352_2_346} />
            <View style={styles.View_I2_352_2_343} />
            <View style={styles.View_I2_352_2_344} />
            <View style={styles.View_I2_352_2_345} />
          </View>
        </View>
        <View style={styles.View_I2_352_1_33}>
          <View style={styles.View_I2_352_1_34} />
          <View style={styles.View_I2_352_1_35}>
            <View style={styles.View_I2_352_1_36}>
              <View style={styles.View_I2_352_1_37}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dac/c739/4bb2eb815a1d9cfbcbde94b9cc25a473"
                  }}
                  style={styles.ImageBackground_I2_352_1_38}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5657/c638/28e6b1f716cd7be33d0e47fda900f6ac"
                  }}
                  style={styles.ImageBackground_I2_352_1_40}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4f/f406/83ae252d073bfa7b1fc92d1ce9e16843"
                  }}
                  style={styles.ImageBackground_I2_352_1_41}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96bd/1184/e5b8fb73c22875a632c9726fbe72b153"
                  }}
                  style={styles.ImageBackground_I2_352_1_42}
                />
              </View>
            </View>
            <View style={styles.View_I2_352_1_43}>
              <View style={styles.View_I2_352_1_44}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dac/c739/4bb2eb815a1d9cfbcbde94b9cc25a473"
                  }}
                  style={styles.ImageBackground_I2_352_1_45}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5657/c638/28e6b1f716cd7be33d0e47fda900f6ac"
                  }}
                  style={styles.ImageBackground_I2_352_1_47}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a4f/f406/83ae252d073bfa7b1fc92d1ce9e16843"
                  }}
                  style={styles.ImageBackground_I2_352_1_48}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96bd/1184/e5b8fb73c22875a632c9726fbe72b153"
                  }}
                  style={styles.ImageBackground_I2_352_1_49}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5b/d1e0/e0787024e27246346f066d462608d04a"
              }}
              style={styles.ImageBackground_I2_352_1_50}
            />
            <View style={styles.View_I2_352_1_52}>
              <View style={styles.View_I2_352_1_53}>
                <View style={styles.View_I2_352_1_54}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/59cf/17f8eb5de28930973f01d8c8f6ec43ce"
                    }}
                    style={styles.ImageBackground_I2_352_1_55}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b28/8572/add7dbd901ace72e869dc250ea488b4e"
                    }}
                    style={styles.ImageBackground_I2_352_1_57}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b243/b50d/fe95c53bc73d326620c5e802f901b235"
                    }}
                    style={styles.ImageBackground_I2_352_1_59}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/467d/af29/e7fbe7cf6f5a09afcb62eea8685d2a83"
                    }}
                    style={styles.ImageBackground_I2_352_1_61}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f2f/0a7b/37c106d65404bb516813a76343448ef8"
                    }}
                    style={styles.ImageBackground_I2_352_1_63}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5746/f50a/4694d2a4e827e5a3f41e4ef2e062e5f4"
                    }}
                    style={styles.ImageBackground_I2_352_1_65}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c5/6623/0af749ccff9d9333e917afe674fe6187"
                    }}
                    style={styles.ImageBackground_I2_352_1_67}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1640/b23d/d0a43b75772e42855abaee6056f16718"
                    }}
                    style={styles.ImageBackground_I2_352_1_69}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f2f/0a7b/37c106d65404bb516813a76343448ef8"
                    }}
                    style={styles.ImageBackground_I2_352_1_71}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3a/b247/0ab23392d3d4578d126f6827cec8900b"
                    }}
                    style={styles.ImageBackground_I2_352_1_73}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5746/f50a/4694d2a4e827e5a3f41e4ef2e062e5f4"
                    }}
                    style={styles.ImageBackground_I2_352_1_75}
                  />
                </View>
                <View style={styles.View_I2_352_1_77}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c37/80da/fc5514c94dd7b4e37a1a9ff878db3fde"
                    }}
                    style={styles.ImageBackground_I2_352_1_78}
                  />
                </View>
                <View style={styles.View_I2_352_1_80}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1640/b23d/d0a43b75772e42855abaee6056f16718"
                    }}
                    style={styles.ImageBackground_I2_352_1_81}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I2_352_1_83}>
              <View style={styles.View_I2_352_1_84}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5460/e38b/9ee38c8ddce1bbce30f9cbf0b20b4333"
                  }}
                  style={styles.ImageBackground_I2_352_1_85}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd0b/cf53/836e815ff7561ab19926efc7a9610722"
                  }}
                  style={styles.ImageBackground_I2_352_1_86}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b34/6408/f4605dae4654900f3925e7d4f27c3187"
                  }}
                  style={styles.ImageBackground_I2_352_1_87}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb6/5041/b13efd99c21f9383878edf60168701b7"
                  }}
                  style={styles.ImageBackground_I2_352_1_88}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d11/ab52/e07b6d7e5f9f19d47bae7c24be62050b"
                  }}
                  style={styles.ImageBackground_I2_352_1_89}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e826/9a9b/c59cba162d05e959421c85ca03743c00"
                  }}
                  style={styles.ImageBackground_I2_352_1_90}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123d/c5a0/d8a213058cd9c228ea50fdb8c4d8a22a"
                  }}
                  style={styles.ImageBackground_I2_352_1_91}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abae/c9c5/7e3965013620db06cee37168e016b18e"
                  }}
                  style={styles.ImageBackground_I2_352_1_92}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/359d/370f/7eed20e1e7ee354a19b685fd05c930af"
                  }}
                  style={styles.ImageBackground_I2_352_1_93}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a2a/7df9/a91ae9c3acbf5d3a53bde64c4fec5a59"
                  }}
                  style={styles.ImageBackground_I2_352_1_94}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca72/62e7/23e5ca334051262f6dae49ff2a731a47"
                  }}
                  style={styles.ImageBackground_I2_352_1_95}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca72/62e7/23e5ca334051262f6dae49ff2a731a47"
                  }}
                  style={styles.ImageBackground_I2_352_1_97}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_692}>
        <Text style={styles.Text_2_692}>Freebie By AR Shakir</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 164, 173, 1)" },
  View_2: { height: hp("131.14754098360655%") },
  View_2_352: {
    width: wp("45.667823155721024%"),
    minWidth: wp("45.667823155721024%"),
    height: hp("624.0437158469946%"),
    minHeight: hp("624.0437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71875%"),
    top: hp("7.103825136612022%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I2_352_1_3: {
    flexGrow: 1,
    width: wp("25.207530657450356%"),
    height: hp("69.58859553102587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.78794860839844%"),
    top: hp("314.68372449197403%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_4: {
    flexGrow: 1,
    width: wp("25.207530657450356%"),
    height: hp("69.58859553102587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.245608011881512%"),
    top: hp("159.8789569458675%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_5: {
    flexGrow: 1,
    width: wp("5.26623288790385%"),
    height: hp("13.813069869911738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.9007949829101562%"),
    top: hp("0%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_99: {
    flexGrow: 1,
    width: wp("52.48628298441569%"),
    height: hp("71.78749126163336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("238.3211563193733%")
  },
  View_I2_352_1_100: {
    width: wp("45.667823155721024%"),
    minWidth: wp("45.667823155721024%"),
    height: hp("71.78749126163336%"),
    minHeight: hp("71.78749126163336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_I2_352_1_101: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.28135553995768%"),
    top: hp("25.204651212431685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_352_1_102: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.408823649088546%"),
    top: hp("60.30815416346482%")
  },
  ImageBackground_I2_352_1_103: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_104: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0613861083984304%"),
    top: hp("1.4973291282445302%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_104: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_105: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    height: hp("11.727583212930648%"),
    minHeight: hp("11.727583212930648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.002643585205078%"),
    top: hp("6.654699773736326%")
  },
  View_I2_352_1_106: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.583660125732422%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_106: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_107: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.902451812243896%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_107: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_108: {
    width: wp("3.4895833333333335%"),
    minWidth: wp("3.4895833333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.087011973063149%"),
    top: hp("28.36563860783812%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_108: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_109: {
    width: wp("2.604166666666667%"),
    minWidth: wp("2.604166666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.531004587809242%"),
    top: hp("48.745627481429295%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_109: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_110: {
    width: wp("9.006709257761637%"),
    minWidth: wp("9.006709257761637%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.327911376953125%"),
    top: hp("32.691180119748964%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_110: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_111: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.64972941080729%"),
    top: hp("25.204651212431685%")
  },
  View_I2_352_1_112: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(126, 126, 126, 1)",
    borderColor: "rgba(216, 216, 216, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_113: {
    width: wp("4.479166666666667%"),
    minWidth: wp("4.479166666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2461420694987027%"),
    top: hp("3.160987395406437%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_113: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_114: {
    width: wp("2.604166666666667%"),
    minWidth: wp("2.604166666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.249636332194008%"),
    top: hp("23.54097626899761%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_114: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_115: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.141688028971359%"),
    top: hp("7.486528907317279%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_115: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_116: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.018096923828125%"),
    top: hp("25.204651212431685%")
  },
  View_I2_352_1_117: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(126, 126, 126, 1)",
    borderColor: "rgba(216, 216, 216, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_118: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0875778198242188%"),
    top: hp("3.160987395406437%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_118: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_119: {
    width: wp("2.604166666666667%"),
    minWidth: wp("2.604166666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2496490478515625%"),
    top: hp("23.54097626899761%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_119: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_120: {
    width: wp("8.943281968434652%"),
    minWidth: wp("8.943281968434652%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0782623291015625%"),
    top: hp("7.486528907317279%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_120: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_121: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.386464436848954%"),
    top: hp("25.204651212431685%")
  },
  View_I2_352_1_122: {
    width: wp("11.099817752838135%"),
    minWidth: wp("11.099817752838135%"),
    height: hp("28.44880734636484%"),
    minHeight: hp("28.44880734636484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(126, 126, 126, 1)",
    borderColor: "rgba(216, 216, 216, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_123: {
    width: wp("2.5520833333333335%"),
    minWidth: wp("2.5520833333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.281361897786468%"),
    top: hp("3.160987395406437%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_123: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_124: {
    width: wp("2.604166666666667%"),
    minWidth: wp("2.604166666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.249649047851577%"),
    top: hp("23.54097626899761%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_124: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_125: {
    width: wp("9.006709257761637%"),
    minWidth: wp("9.006709257761637%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0465494791666714%"),
    top: hp("7.486528907317279%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_125: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_126: {
    flexGrow: 1,
    width: wp("37.10510571797689%"),
    height: hp("66.21418520401085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.28135553995768%"),
    top: hp("321.75436384690914%")
  },
  View_I2_352_1_127: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    height: hp("11.727583212930648%"),
    minHeight: hp("11.727583212930648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.721281687418625%"),
    top: hp("0%")
  },
  View_I2_352_1_128: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.775970458984375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_128: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_129: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.902443474107713%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_129: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_130: {
    width: wp("2.4102461338043213%"),
    minWidth: wp("2.4102461338043213%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.347431182861335%"),
    top: hp("64.30097069245215%")
  },
  View_I2_352_1_131: {
    width: wp("1.0465542475382485%"),
    minWidth: wp("1.0465542475382485%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3637034098307197%"),
    top: hp("0.000008338136126440077%")
  },
  ImageBackground_I2_352_1_132: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.4991018706983556%"),
    minHeight: hp("0.4991018706983556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3171284993489607%"),
    top: hp("0.7486645641222935%")
  },
  View_I2_352_1_133: {
    width: wp("1.0465542475382485%"),
    minWidth: wp("1.0465542475382485%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087,
    borderTopLeftRadius: 18.26712989807129,
    borderTopRightRadius: 18.26712989807129,
    borderBottomLeftRadius: 18.26712989807129,
    borderBottomRightRadius: 18.26712989807129
  },
  View_I2_352_1_134: {
    width: wp("1.0465542475382485%"),
    minWidth: wp("1.0465542475382485%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_135: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.4991018706983556%"),
    minHeight: hp("0.4991018706983556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31714121500650094%"),
    top: hp("0.7486645641222935%")
  },
  View_I2_352_1_136: {
    width: wp("1.0465542475382485%"),
    minWidth: wp("1.0465542475382485%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087,
    borderTopLeftRadius: 18.26712989807129,
    borderTopRightRadius: 18.26712989807129,
    borderBottomLeftRadius: 18.26712989807129,
    borderBottomRightRadius: 18.26712989807129
  },
  View_I2_352_1_137: {
    width: wp("37.10510571797689%"),
    minWidth: wp("37.10510571797689%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.549968114967555%")
  },
  ImageBackground_I2_352_1_138: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 143.701416015625,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_139: {
    width: wp("21.18479569753011%"),
    minWidth: wp("21.18479569753011%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.920314788818366%"),
    top: hp("-0.000008338136126440077%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 143.701416015625,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_140: {
    width: wp("18.64769458770752%"),
    minWidth: wp("18.64769458770752%"),
    height: hp("19.250609184223446%"),
    minHeight: hp("19.250609184223446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.18886693318685%"),
    top: hp("8.65108302382174%")
  },
  View_I2_352_1_141: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_141: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_142: {
    width: wp("3.6979166666666665%"),
    minWidth: wp("3.6979166666666665%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.80489528635161%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_142: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_143: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.884484796576146%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_143: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 6.524660110473633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_144: {
    width: wp("18.64769458770752%"),
    minWidth: wp("18.64769458770752%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.325558188183038%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_144: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_352_1_145: {
    width: wp("2.2833879788716636%"),
    minWidth: wp("2.2833879788716636%"),
    height: hp("0.9982200919604692%"),
    minHeight: hp("0.9982200919604692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.14300370346649%")
  },
  View_I2_352_1_151: {
    flexGrow: 1,
    width: wp("31.84062004089355%"),
    height: hp("118.53670214043288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.913598378499344%"),
    top: hp("108.13875458931011%")
  },
  View_I2_352_1_152: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.495225270589202%"),
    top: hp("113.71203146345627%")
  },
  ImageBackground_I2_352_1_153: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_154: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0613861083984304%"),
    top: hp("1.4973124519723342%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_154: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_155: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    height: hp("11.727583212930648%"),
    minHeight: hp("11.727583212930648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.089045206705734%"),
    top: hp("0%")
  },
  View_I2_352_1_156: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4567960103352817%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_156: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_157: {
    width: wp("19.66253439585368%"),
    minWidth: wp("19.66253439585368%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.9024184596994616%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_157: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_158: {
    width: wp("31.84062004089355%"),
    minWidth: wp("31.84062004089355%"),
    height: hp("88.5074052654329%"),
    minHeight: hp("88.5074052654329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.54995143869536%")
  },
  View_I2_352_1_159: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_160: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 143.701416015625,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_329: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 143.701416015625,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_161: {
    width: wp("7.135416666666666%"),
    minWidth: wp("7.135416666666666%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.091078440348312%"),
    top: hp("17.302199400187845%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.920555114746094,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_352_1_162: {
    width: wp("4.947346846262614%"),
    minWidth: wp("4.947346846262614%"),
    height: hp("2.1628084078512555%"),
    minHeight: hp("2.1628084078512555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.169347127278648%"),
    top: hp("24.622349139771188%")
  },
  View_I2_352_1_168: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.554584503173828%"),
    top: hp("6.654666421191962%")
  },
  ImageBackground_I2_352_1_169: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 143.701416015625,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_326: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 143.701416015625,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_170: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.958699544270843%"),
    top: hp("14.889843216359282%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.920555114746094,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_352_1_171: {
    width: wp("4.94734803835551%"),
    minWidth: wp("4.94734803835551%"),
    height: hp("2.1627974640476246%"),
    minHeight: hp("2.1627974640476246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.169347127278655%"),
    top: hp("22.210026308486988%")
  },
  View_I2_352_1_177: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.590031858350386%")
  },
  ImageBackground_I2_352_1_178: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 143.701416015625
  },
  View_I2_352_1_328: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 143.701416015625
  },
  View_I2_352_1_179: {
    width: wp("7.135416666666666%"),
    minWidth: wp("7.135416666666666%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.091078440348312%"),
    top: hp("14.88984321635931%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.920555114746094,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_352_1_180: {
    width: wp("4.947347640991211%"),
    minWidth: wp("4.947347640991211%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.169347127278648%"),
    top: hp("22.210026308487045%")
  },
  View_I2_352_1_186: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.554584503173828%"),
    top: hp("49.24469827954235%")
  },
  ImageBackground_I2_352_1_187: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 143.701416015625,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_327: {
    width: wp("15.286035537719728%"),
    minWidth: wp("15.286035537719728%"),
    height: hp("39.26268197148224%"),
    minHeight: hp("39.26268197148224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 143.701416015625,
    borderBottomRightRadius: 0
  },
  View_I2_352_1_188: {
    width: wp("2.1875%"),
    minWidth: wp("2.1875%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.564750671386719%"),
    top: hp("16.387189020876036%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.920555114746094,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_352_1_189: {
    width: wp("4.947347640991211%"),
    minWidth: wp("4.947347640991211%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.169347127278655%"),
    top: hp("20.712730532786907%")
  },
  View_I2_352_1_195: {
    flexGrow: 1,
    width: wp("25.750606854756676%"),
    height: hp("62.48373646553749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.053246815999351%"),
    top: hp("416.23651890155395%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_I2_352_1_196: {
    flexGrow: 1,
    width: wp("22.38991896311442%"),
    height: hp("63.63549154312884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.638952891031899%"),
    top: hp("469.7380691278176%")
  },
  View_I2_352_1_197: {
    width: wp("4.895833333333333%"),
    minWidth: wp("4.895833333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.721281687418625%"),
    top: hp("-0.000009836394895046396%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_197: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_198: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("19.1322389196177%"),
    minHeight: hp("19.1322389196177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.061619367755839%")
  },
  View_I2_352_1_199: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("19.1322389196177%"),
    minHeight: hp("19.1322389196177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6.089043140411377,
    borderTopRightRadius: 6.089043140411377,
    borderBottomLeftRadius: 6.089043140411377,
    borderBottomRightRadius: 6.089043140411377
  },
  View_I2_352_1_200: {
    width: wp("19.884530703226723%"),
    minWidth: wp("19.884530703226723%"),
    height: hp("13.97485264012071%"),
    minHeight: hp("13.97485264012071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.268552144368492%"),
    top: hp("3.0777998960734294%")
  },
  View_I2_352_1_201: {
    width: wp("18.045132954915363%"),
    minWidth: wp("18.045132954915363%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8393898010253906%"),
    top: hp("-0.000006253602066408348%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_201: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.178086280822754,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_202: {
    width: wp("15.539744695027668%"),
    minWidth: wp("15.539744695027668%"),
    minHeight: hp("7.4865283861837755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8393898010253906%"),
    top: hp("6.488317479201385%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_202: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_203: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("0.2495509353491778%"),
    minHeight: hp("0.2495509353491778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7486468455830959%"),
    backgroundColor: "rgba(37, 164, 173, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_204: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.689367575723566%")
  },
  View_I2_352_1_205: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6.089043140411377,
    borderTopRightRadius: 6.089043140411377,
    borderBottomLeftRadius: 6.089043140411377,
    borderBottomRightRadius: 6.089043140411377
  },
  View_I2_352_1_206: {
    width: wp("17.41085688273112%"),
    minWidth: wp("17.41085688273112%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3636906941731795%"),
    top: hp("2.162770755955421%")
  },
  View_I2_352_1_207: {
    width: wp("15.603171984354654%"),
    minWidth: wp("15.603171984354654%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8076896667480469%"),
    top: hp("0.000008338136240126914%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_207: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.178086280822754,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_208: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6654791493234598%")
  },
  View_I2_352_1_209: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("0.2495509353491778%"),
    minHeight: hp("0.2495509353491778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.998199963178763%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_210: {
    width: wp("0.09514133135477702%"),
    minWidth: wp("0.09514133135477702%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3647104899088589%"),
    top: hp("-0.000004169068120063457%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_211: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.50324220084104%")
  },
  View_I2_352_1_212: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6.089043140411377,
    borderTopRightRadius: 6.089043140411377,
    borderBottomLeftRadius: 6.089043140411377,
    borderBottomRightRadius: 6.089043140411377
  },
  View_I2_352_1_213: {
    width: wp("15.69831371307373%"),
    minWidth: wp("15.69831371307373%"),
    height: hp("2.2043665901559297%"),
    minHeight: hp("2.2043665901559297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3636906941731795%"),
    top: hp("2.8282540743467735%")
  },
  View_I2_352_1_214: {
    width: wp("13.890628814697264%"),
    minWidth: wp("13.890628814697264%"),
    minHeight: hp("1.8300403011301176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8076896667480469%"),
    top: hp("0.37433228206111835%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_214: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.178086280822754,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_215: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_216: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("0.2495509353491778%"),
    minHeight: hp("0.2495509353491778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9982083013150032%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_217: {
    width: wp("0.09514133135477702%"),
    minWidth: wp("0.09514133135477702%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3647104899088589%"),
    top: hp("0.0000041690680063766195%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_218: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.31711682595841%")
  },
  View_I2_352_1_219: {
    width: wp("22.38991896311442%"),
    minWidth: wp("22.38991896311442%"),
    height: hp("8.318364815633805%"),
    minHeight: hp("8.318364815633805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6.089043140411377,
    borderTopRightRadius: 6.089043140411377,
    borderBottomLeftRadius: 6.089043140411377,
    borderBottomRightRadius: 6.089043140411377
  },
  View_I2_352_1_220: {
    width: wp("17.41085688273112%"),
    minWidth: wp("17.41085688273112%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3636906941731795%"),
    top: hp("2.1627790940915474%")
  },
  View_I2_352_1_221: {
    width: wp("15.603171984354654%"),
    minWidth: wp("15.603171984354654%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8076896667480469%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_221: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 10.178086280822754,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_222: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6654666421192132%")
  },
  View_I2_352_1_223: {
    width: wp("0.8245578904946645%"),
    minWidth: wp("0.8245578904946645%"),
    height: hp("0.2495509353491778%"),
    minHeight: hp("0.2495509353491778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9982041322468831%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_224: {
    width: wp("0.09514133135477702%"),
    minWidth: wp("0.09514133135477702%"),
    height: hp("2.1627747947401037%"),
    minHeight: hp("2.1627747947401037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3647104899088589%"),
    top: hp("0%"),
    backgroundColor: "rgba(49, 49, 49, 1)",
    borderTopLeftRadius: 12.178086280822754,
    borderTopRightRadius: 12.178086280822754,
    borderBottomLeftRadius: 12.178086280822754,
    borderBottomRightRadius: 12.178086280822754
  },
  View_I2_352_1_225: {
    flexGrow: 1,
    width: wp("37.10510571797689%"),
    height: hp("58.47812089763704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.281361897786454%"),
    top: hp("399.6142444714822%")
  },
  View_I2_352_1_226: {
    width: wp("37.10510571797689%"),
    minWidth: wp("37.10510571797689%"),
    height: hp("46.416477557739924%"),
    minHeight: hp("46.416477557739924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.061643339897103%")
  },
  View_I2_352_1_227: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.159183189517194%")
  },
  View_I2_352_1_228: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(216, 216, 216, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_229: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319778442382884%"),
    top: hp("33.107092602005366%")
  },
  View_I2_352_1_230: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_231: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4736722310384067%"),
    top: hp("1.5804957822372785%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_231: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_232: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3730061848958357%"),
    top: hp("4.159183189517194%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_232: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 14.267129898071289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_233: {
    width: wp("3.0729166666666665%"),
    minWidth: wp("3.0729166666666665%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.217936197916671%"),
    top: hp("8.068814303705608%"),
    justifyContent: "center"
  },
  Text_I2_352_1_233: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 29.534259796142578,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_234: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("12.013620887297751%"),
    minHeight: hp("12.013620887297751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.585693359375007%"),
    top: hp("17.052647324859095%")
  },
  View_I2_352_1_235: {
    width: wp("6.877568562825521%"),
    minWidth: wp("6.877568562825521%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_236: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663624914617685%")
  },
  View_I2_352_1_237: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("-0.000008338136126440077%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_237: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_238: {
    width: wp("5.940068960189819%"),
    minWidth: wp("5.940068960189819%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6618707375448025%")
  },
  ImageBackground_I2_352_1_239: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.16637082959789495%")
  },
  View_I2_352_1_240: {
    width: wp("5.052083333333333%"),
    minWidth: wp("5.052083333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0.000004169068063220038%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_240: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_241: {
    width: wp("6.617152293523152%"),
    minWidth: wp("6.617152293523152%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.323745644157725%")
  },
  ImageBackground_I2_352_1_242: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663812522679109%")
  },
  View_I2_352_1_243: {
    width: wp("5.729166666666666%"),
    minWidth: wp("5.729166666666666%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0.000014591738136005006%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_243: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_244: {
    width: wp("7.606735229492187%"),
    minWidth: wp("7.606735229492187%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.985624719838654%")
  },
  ImageBackground_I2_352_1_245: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.16635832239364845%")
  },
  View_I2_352_1_246: {
    width: wp("6.71875%"),
    minWidth: wp("6.71875%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("-0.000010422670186471805%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_246: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_247: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.64749962645152%")
  },
  ImageBackground_I2_352_1_248: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.16636874506383492%")
  },
  View_I2_352_1_249: {
    width: wp("7.34375%"),
    minWidth: wp("7.34375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_249: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_250: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.81236012776693%"),
    top: hp("0%")
  },
  View_I2_352_1_251: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_352_1_252: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319778442382812%"),
    top: hp("33.107107193743616%")
  },
  View_I2_352_1_253: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 164, 173, 1)"
  },
  View_I2_352_1_254: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.473665873209633%"),
    top: hp("1.5804936977032185%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_255: {
    width: wp("4.479166666666667%"),
    minWidth: wp("4.479166666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4681447347005303%"),
    top: hp("4.159195696721326%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_255: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 14.267129898071289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_256: {
    width: wp("3.177083333333333%"),
    minWidth: wp("3.177083333333333%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1544977823893205%"),
    top: hp("8.152012225708631%"),
    justifyContent: "center"
  },
  Text_I2_352_1_256: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 29.534259796142578,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_257: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("12.013653197575136%"),
    minHeight: hp("12.013653197575136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5856806437174455%"),
    top: hp("17.13584524686223%")
  },
  View_I2_352_1_258: {
    width: wp("6.877568562825521%"),
    minWidth: wp("6.877568562825521%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_259: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.16637499866590133%")
  },
  View_I2_352_1_260: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921946%"),
    top: hp("0.000008338136069596658%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_260: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_261: {
    width: wp("5.940068960189819%"),
    minWidth: wp("5.940068960189819%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6618707375448025%")
  },
  ImageBackground_I2_352_1_262: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663666605297749%")
  },
  View_I2_352_1_263: {
    width: wp("5.052083333333333%"),
    minWidth: wp("5.052083333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921946%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_263: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_264: {
    width: wp("6.617152293523152%"),
    minWidth: wp("6.617152293523152%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.323762320429921%")
  },
  ImageBackground_I2_352_1_265: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663624914617685%")
  },
  View_I2_352_1_266: {
    width: wp("5.729166666666666%"),
    minWidth: wp("5.729166666666666%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921946%"),
    top: hp("-0.000004169068120063457%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_266: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_267: {
    width: wp("7.606735229492187%"),
    minWidth: wp("7.606735229492187%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.98563931157679%")
  },
  ImageBackground_I2_352_1_268: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663729141318413%")
  },
  View_I2_352_1_269: {
    width: wp("6.71875%"),
    minWidth: wp("6.71875%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921946%"),
    top: hp("0.000006253602066408348%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_269: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_270: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.647532978995855%")
  },
  ImageBackground_I2_352_1_271: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663666605297749%")
  },
  View_I2_352_1_272: {
    width: wp("7.34375%"),
    minWidth: wp("7.34375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921946%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_272: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_273: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.62472025553386%"),
    top: hp("4.159183189517194%")
  },
  View_I2_352_1_274: {
    width: wp("11.480383078257244%"),
    minWidth: wp("11.480383078257244%"),
    height: hp("42.257294368222766%"),
    minHeight: hp("42.257294368222766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(216, 216, 216, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_275: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319778442382812%"),
    top: hp("33.107092602005366%")
  },
  View_I2_352_1_276: {
    width: wp("8.816426595052084%"),
    minWidth: wp("8.816426595052084%"),
    height: hp("4.991019097833686%"),
    minHeight: hp("4.991019097833686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(37, 164, 173, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_277: {
    width: wp("2.96875%"),
    minWidth: wp("2.96875%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9176712036132812%"),
    top: hp("1.5804957822372785%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_277: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_278: {
    width: wp("5.9375%"),
    minWidth: wp("5.9375%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7387237548828125%"),
    top: hp("4.159183189517194%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_278: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 14.267129898071289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_279: {
    width: wp("6.770833333333333%"),
    minWidth: wp("6.770833333333333%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3468144734700473%"),
    top: hp("9.649303832340706%"),
    justifyContent: "center"
  },
  Text_I2_352_1_279: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 29.534259796142578,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_280: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("6.689857003467331%"),
    minHeight: hp("6.689857003467331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5856806437174527%"),
    top: hp("19.464970156143295%")
  },
  View_I2_352_1_281: {
    width: wp("6.877568562825521%"),
    minWidth: wp("6.877568562825521%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_282: {
    width: wp("6.877568562825521%"),
    minWidth: wp("6.877568562825521%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_283: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663666605297749%")
  },
  View_I2_352_1_284: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_284: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_285: {
    width: wp("7.606735229492187%"),
    minWidth: wp("7.606735229492187%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.661883244748992%")
  },
  View_I2_352_1_286: {
    width: wp("7.606735229492187%"),
    minWidth: wp("7.606735229492187%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_287: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663666605297749%")
  },
  View_I2_352_1_288: {
    width: wp("6.71875%"),
    minWidth: wp("6.71875%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_288: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_289: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.323737306021599%")
  },
  View_I2_352_1_290: {
    width: wp("8.231735229492188%"),
    minWidth: wp("8.231735229492188%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_291: {
    width: wp("0.38056517640749615%"),
    minWidth: wp("0.38056517640749615%"),
    height: hp("0.9982037413967112%"),
    minHeight: hp("0.9982037413967112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1663666605297749%")
  },
  View_I2_352_1_292: {
    width: wp("7.34375%"),
    minWidth: wp("7.34375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8879852294921875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_292: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2_352_1_293: {
    width: wp("15.260416666666668%"),
    minWidth: wp("15.260416666666668%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.909538269042969%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_293: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_294: {
    flexGrow: 1,
    width: wp("45.667823155721024%"),
    height: hp("79.02446809362192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("545.0192644296447%")
  },
  View_I2_352_1_295: {
    width: wp("45.667823155721024%"),
    minWidth: wp("45.667823155721024%"),
    height: hp("79.02446809362192%"),
    minHeight: hp("79.02446809362192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(49, 49, 49, 1)"
  },
  ImageBackground_I2_352_1_296: {
    width: wp("12.146372000376383%"),
    minWidth: wp("12.146372000376383%"),
    height: hp("31.85933639442986%"),
    minHeight: hp("31.85933639442986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_297: {
    width: wp("12.146372000376383%"),
    minWidth: wp("12.146372000376383%"),
    height: hp("31.85933639442986%"),
    minHeight: hp("31.85933639442986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.165117107453966%")
  },
  ImageBackground_I2_352_1_298: {
    width: wp("12.146372000376383%"),
    minWidth: wp("12.146372000376383%"),
    height: hp("31.85933639442986%"),
    minHeight: hp("31.85933639442986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.52144877115886%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_299: {
    width: wp("12.146372000376383%"),
    minWidth: wp("12.146372000376383%"),
    height: hp("31.85933639442986%"),
    minHeight: hp("31.85933639442986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.52144877115886%"),
    top: hp("47.165117107453966%")
  },
  View_I2_352_1_300: {
    width: wp("5.729166666666666%"),
    minWidth: wp("5.729166666666666%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.97966766357422%"),
    top: hp("75.53073903901986%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_300: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_301: {
    width: wp("24.322916666666668%"),
    minWidth: wp("24.322916666666668%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.687478383382157%"),
    top: hp("14.557134909708111%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.578781127929688,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_302: {
    width: wp("6.913600762685141%"),
    minWidth: wp("6.913600762685141%"),
    height: hp("5.4069373125587%"),
    minHeight: hp("5.4069373125587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.408823649088546%"),
    top: hp("32.358438460553316%")
  },
  View_I2_352_1_303: {
    width: wp("6.913600762685141%"),
    minWidth: wp("6.913600762685141%"),
    height: hp("5.4069373125587%"),
    minHeight: hp("5.4069373125587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.6089043021202087
  },
  View_I2_352_1_304: {
    width: wp("4.114583333333333%"),
    minWidth: wp("4.114583333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3954035441080634%"),
    top: hp("1.8300374348958712%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_305: {
    width: wp("2.2916684548060102%"),
    minWidth: wp("2.2916684548060102%"),
    height: hp("15.869831648029265%"),
    minHeight: hp("15.869831648029265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.377047220865883%"),
    top: hp("52.73842733414449%")
  },
  View_I2_352_1_306: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.524660110473633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_307: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.408731095777853%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_308: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.819262228376829%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_309: {
    width: wp("1.6145833333333335%"),
    minWidth: wp("1.6145833333333335%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.229801699112045%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_310: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.640316155438882%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_311: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    height: hp("12.459302599964246%"),
    minHeight: hp("12.459302599964246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.79807027180989%"),
    top: hp("52.73842733414449%")
  },
  View_I2_352_1_312: {
    width: wp("3.3854166666666665%"),
    minWidth: wp("3.3854166666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.408731095777853%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_312: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_313: {
    width: wp("2.3958333333333335%"),
    minWidth: wp("2.3958333333333335%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.819262228376829%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_314: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.229801699112045%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_315: {
    width: wp("2.03125%"),
    minWidth: wp("2.03125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.524660110473633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_316: {
    width: wp("3.6787966887156167%"),
    minWidth: wp("3.6787966887156167%"),
    height: hp("14.289342119394105%"),
    minHeight: hp("14.289342119394105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.48764546712239%"),
    top: hp("52.73842733414449%")
  },
  View_I2_352_1_317: {
    width: wp("3.6787966887156167%"),
    minWidth: wp("3.6787966887156167%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.408731095777853%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_318: {
    width: wp("3.6787966887156167%"),
    minWidth: wp("3.6787966887156167%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.649308001408826%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_319: {
    width: wp("3.6787966887156167%"),
    minWidth: wp("3.6787966887156167%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.059839134007916%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_320: {
    width: wp("2.5520833333333335%"),
    minWidth: wp("2.5520833333333335%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.524660110473633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_321: {
    width: wp("5.3279125690460205%"),
    minWidth: wp("5.3279125690460205%"),
    height: hp("7.283668309613003%"),
    minHeight: hp("7.283668309613003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5330378214518205%"),
    top: hp("52.904798163742385%")
  },
  ImageBackground_I2_352_1_322: {
    width: wp("3.742224375406901%"),
    minWidth: wp("3.742224375406901%"),
    height: hp("2.911427763641858%"),
    minHeight: hp("2.911427763641858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0634256998697964%"),
    top: hp("0%")
  },
  View_I2_352_1_323: {
    width: wp("5.3279125690460205%"),
    minWidth: wp("5.3279125690460205%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.824654000704413%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.306851387023926,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_2_348: {
    flexGrow: 1,
    width: wp("46.175241470336914%"),
    height: hp("86.09507409601264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1.4140811774248627%")
  },
  View_I2_352_1_6: {
    width: wp("37.20024744669596%"),
    minWidth: wp("37.20024744669596%"),
    height: hp("81.3535763266308%"),
    minHeight: hp("81.3535763266308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.281361897786454%"),
    top: hp("4.741531121926228%")
  },
  View_I2_352_1_7: {
    width: wp("37.10510571797689%"),
    minWidth: wp("37.10510571797689%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_8: {
    width: wp("13.319032192230223%"),
    minWidth: wp("13.319032192230223%"),
    height: hp("1.7759621469049507%"),
    minHeight: hp("1.7759621469049507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.869082132975265%"),
    top: hp("1.4972624231557372%")
  },
  View_I2_352_1_9: {
    width: wp("1.5625%"),
    minWidth: wp("1.5625%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_9: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_10: {
    width: wp("1.6145833333333335%"),
    minWidth: wp("1.6145833333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1396611531575473%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_10: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_11: {
    width: wp("3.229166666666667%"),
    minWidth: wp("3.229166666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.342754364013665%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_11: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_12: {
    width: wp("2.1875%"),
    minWidth: wp("2.1875%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.131528218587235%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_12: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_13: {
    width: wp("7.452735106150309%"),
    minWidth: wp("7.452735106150309%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.652366638183594%"),
    top: hp("0%")
  },
  View_I2_352_1_14: {
    width: wp("4.820492267608643%"),
    minWidth: wp("4.820492267608643%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6322428385416714%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_15: {
    width: wp("4.820492267608643%"),
    minWidth: wp("4.820492267608643%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_16: {
    width: wp("1.9791666666666665%"),
    minWidth: wp("1.9791666666666665%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4279047648111884%"),
    top: hp("1.4973291282445356%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_16: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_17: {
    width: wp("1.7708333333333333%"),
    minWidth: wp("1.7708333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4972957757001382%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_17: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_18: {
    width: wp("2.2395833333333335%"),
    minWidth: wp("2.2395833333333335%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2477186859631146%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_18: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 10.395895004272461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_19: {
    width: wp("19.739583333333332%"),
    minWidth: wp("19.739583333333332%"),
    height: hp("39.678592369204665%"),
    minHeight: hp("39.678592369204665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.2064095585724%")
  },
  View_I2_352_1_20: {
    width: wp("19.739583333333332%"),
    minWidth: wp("19.739583333333332%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_20: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 48.89043045043945,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_21: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.853942537568315%")
  },
  ImageBackground_I2_352_1_22: {
    width: wp("6.818459828694662%"),
    minWidth: wp("6.818459828694662%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_23: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8393898010253977%"),
    top: hp("1.4972957757001382%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_24: {
    width: wp("5.708477894465128%"),
    minWidth: wp("5.708477894465128%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.452735900878913%"),
    top: hp("34.853942537568315%")
  },
  ImageBackground_I2_352_1_25: {
    width: wp("5.708477894465128%"),
    minWidth: wp("5.708477894465128%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_26: {
    width: wp("1.9791666666666665%"),
    minWidth: wp("1.9791666666666665%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8711026509602888%"),
    top: hp("1.4972957757001382%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_26: {
    color: "rgba(37, 164, 173, 1)",
    fontSize: 8.960277557373047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_27: {
    width: wp("13.510063489278156%"),
    minWidth: wp("13.510063489278156%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.53379279798498%"),
    justifyContent: "flex-start"
  },
  Text_I2_352_1_27: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 7.74246883392334,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_352_1_28: {
    width: wp("23.436473210652668%"),
    minWidth: wp("23.436473210652668%"),
    height: hp("75.36438488569416%"),
    minHeight: hp("75.36438488569416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.763771057128913%"),
    top: hp("5.989183102800549%")
  },
  ImageBackground_I2_352_1_29: {
    width: wp("23.436473210652668%"),
    minWidth: wp("23.436473210652668%"),
    height: hp("62.9700207319416%"),
    minHeight: hp("62.9700207319416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.81386211791325%")
  },
  ImageBackground_I2_352_2_332: {
    width: wp("15.888597170511881%"),
    minWidth: wp("15.888597170511881%"),
    height: hp("75.36438488569416%"),
    minHeight: hp("75.36438488569416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.1038818359375%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I2_352_2_335: {
    width: wp("46.175241470336914%"),
    minWidth: wp("46.175241470336914%"),
    height: hp("78.85809726402407%"),
    minHeight: hp("78.85809726402407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_2_336: {
    width: wp("2.854238947232564%"),
    minWidth: wp("2.854238947232564%"),
    height: hp("7.4865283861837755%"),
    minHeight: hp("7.4865283861837755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.3715766948429%")
  },
  View_I2_352_2_337: {
    width: wp("0.9831267595291137%"),
    minWidth: wp("0.9831267595291137%"),
    height: hp("2.578693139748495%"),
    minHeight: hp("2.578693139748495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.907826908299185%"),
    backgroundColor: "rgba(243, 247, 251, 1)"
  },
  View_I2_352_2_338: {
    width: wp("1.8711121877034504%"),
    minWidth: wp("1.8711121877034504%"),
    height: hp("4.90783524643528%"),
    minHeight: hp("4.90783524643528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.983123779296875%"),
    top: hp("0%"),
    backgroundColor: "rgba(69, 236, 156, 1)",
    borderTopLeftRadius: 17.962677001953125,
    borderTopRightRadius: 17.962677001953125,
    borderBottomLeftRadius: 17.962677001953125,
    borderBottomRightRadius: 0
  },
  View_I2_352_2_339: {
    width: wp("3.3299454053243%"),
    minWidth: wp("3.3299454053243%"),
    height: hp("8.73428303035882%"),
    minHeight: hp("8.73428303035882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.660499572753913%"),
    top: hp("58.97720420295423%")
  },
  View_I2_352_2_340: {
    width: wp("1.490546961625417%"),
    minWidth: wp("1.490546961625417%"),
    height: hp("3.9096313747551923%"),
    minHeight: hp("3.9096313747551923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8393961588541643%"),
    top: hp("4.824645662568301%"),
    backgroundColor: "rgba(204, 251, 255, 1)"
  },
  View_I2_352_2_341: {
    width: wp("1.8393983443578084%"),
    minWidth: wp("1.8393983443578084%"),
    height: hp("4.824651395036875%"),
    minHeight: hp("4.824651395036875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 251, 255, 1)"
  },
  ImageBackground_I2_352_2_349: {
    width: wp("1.5539745489756265%"),
    minWidth: wp("1.5539745489756265%"),
    height: hp("4.07599881698525%"),
    minHeight: hp("4.07599881698525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.347424825032554%"),
    top: hp("15.139420306096312%")
  },
  View_I2_352_2_346: {
    width: wp("1.5539745489756265%"),
    minWidth: wp("1.5539745489756265%"),
    height: hp("4.07599881698525%"),
    minHeight: hp("4.07599881698525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.6212641398112%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 194, 41, 1)",
    borderTopLeftRadius: 17.962677001953125,
    borderTopRightRadius: 17.962677001953125,
    borderBottomLeftRadius: 17.962677001953125,
    borderBottomRightRadius: 0
  },
  View_I2_352_2_343: {
    width: wp("1.8711121877034504%"),
    minWidth: wp("1.8711121877034504%"),
    height: hp("4.90783524643528%"),
    minHeight: hp("4.90783524643528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.464726765950516%"),
    top: hp("67.12923310493511%"),
    backgroundColor: "rgba(222, 187, 175, 1)",
    borderTopLeftRadius: 17.962677001953125,
    borderTopRightRadius: 17.962677001953125,
    borderBottomLeftRadius: 17.962677001953125,
    borderBottomRightRadius: 0
  },
  View_I2_352_2_344: {
    width: wp("0.9196991721789042%"),
    minWidth: wp("0.9196991721789042%"),
    height: hp("2.4123256975184373%"),
    minHeight: hp("2.4123256975184373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.74080149332682%"),
    top: hp("40.26089027279713%"),
    backgroundColor: "rgba(212, 204, 201, 1)"
  },
  View_I2_352_2_345: {
    width: wp("1.173409322897593%"),
    minWidth: wp("1.173409322897593%"),
    height: hp("5.656487824486905%"),
    minHeight: hp("5.656487824486905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.929956988558736%"),
    backgroundColor: "rgba(215, 252, 255, 1)"
  },
  View_I2_352_1_33: {
    flexGrow: 1,
    width: wp("45.667823155721024%"),
    height: hp("14.14122034291752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.3518013042179%")
  },
  View_I2_352_1_34: {
    width: wp("45.667823155721024%"),
    minWidth: wp("45.667823155721024%"),
    height: hp("14.14122034291752%"),
    minHeight: hp("14.14122034291752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_I2_352_1_35: {
    width: wp("35.34297625223795%"),
    minWidth: wp("35.34297625223795%"),
    height: hp("2.7222802730205933%"),
    minHeight: hp("2.7222802730205933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.169347127278648%"),
    top: hp("5.739639365607928%")
  },
  View_I2_352_1_36: {
    width: wp("4.942489465077718%"),
    minWidth: wp("4.942489465077718%"),
    height: hp("2.7222557797458005%"),
    minHeight: hp("2.7222557797458005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_37: {
    width: wp("4.942489862442017%"),
    height: hp("2.7222609910808626%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_352_1_38: {
    width: wp("1.264447768529256%"),
    minWidth: wp("1.264447768529256%"),
    height: hp("2.079007143531341%"),
    minHeight: hp("2.079007143531341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6780357360839844%"),
    top: hp("0.5420121990266296%")
  },
  ImageBackground_I2_352_1_40: {
    width: wp("1.5264153480529785%"),
    minWidth: wp("1.5264153480529785%"),
    height: hp("1.6704591897016015%"),
    minHeight: hp("1.6704591897016015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0599365234375%"),
    top: hp("0.5420121990266296%")
  },
  ImageBackground_I2_352_1_41: {
    width: wp("1.3067022959391277%"),
    minWidth: wp("1.3067022959391277%"),
    height: hp("2.492460136205121%"),
    minHeight: hp("2.492460136205121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000006357828780778618%"),
    top: hp("0.22983238345287305%")
  },
  ImageBackground_I2_352_1_42: {
    width: wp("1.2542556722958882%"),
    minWidth: wp("1.2542556722958882%"),
    height: hp("2.492277478911186%"),
    minHeight: hp("2.492277478911186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5216662089029924%"),
    top: hp("0%")
  },
  View_I2_352_1_43: {
    width: wp("4.942493438720703%"),
    minWidth: wp("4.942493438720703%"),
    height: hp("2.7222711531842343%"),
    minHeight: hp("2.7222711531842343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.400479634602853%"),
    top: hp("0%")
  },
  View_I2_352_1_44: {
    width: wp("4.942493438720703%"),
    height: hp("2.7222711531842343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_352_1_45: {
    width: wp("1.264447768529256%"),
    minWidth: wp("1.264447768529256%"),
    height: hp("2.079007143531341%"),
    minHeight: hp("2.079007143531341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6780548095703267%"),
    top: hp("0.5420121990266296%")
  },
  ImageBackground_I2_352_1_47: {
    width: wp("1.5264153480529785%"),
    minWidth: wp("1.5264153480529785%"),
    height: hp("1.6704591897016015%"),
    minHeight: hp("1.6704591897016015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0599365234375%"),
    top: hp("0.5420121990266296%")
  },
  ImageBackground_I2_352_1_48: {
    width: wp("1.3067022959391277%"),
    minWidth: wp("1.3067022959391277%"),
    height: hp("2.492460136205121%"),
    minHeight: hp("2.492460136205121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.22983238345287305%")
  },
  ImageBackground_I2_352_1_49: {
    width: wp("1.2542556722958882%"),
    minWidth: wp("1.2542556722958882%"),
    height: hp("2.492277478911186%"),
    minHeight: hp("2.492277478911186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5216725667317803%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_50: {
    width: wp("4.2813583215077715%"),
    minWidth: wp("4.2813583215077715%"),
    height: hp("1.9132238919617701%"),
    minHeight: hp("1.9132238919617701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.113861083984375%"),
    top: hp("0.3327583354679007%")
  },
  View_I2_352_1_52: {
    width: wp("4.708669583002726%"),
    minWidth: wp("4.708669583002726%"),
    height: hp("1.6698781258421516%"),
    minHeight: hp("1.6698781258421516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.566584269205727%"),
    top: hp("0.49915417947403284%")
  },
  View_I2_352_1_53: {
    width: wp("4.708669583002726%"),
    height: hp("1.66987630187488%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_352_1_54: {
    width: wp("4.194379647572835%"),
    height: hp("1.66987630187488%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.514284769694008%")
  },
  ImageBackground_I2_352_1_55: {
    width: wp("0.1484055072069168%"),
    minWidth: wp("0.1484055072069168%"),
    height: hp("1.635675873261332%"),
    minHeight: hp("1.635675873261332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4112345377604214%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_57: {
    width: wp("0.315359483162562%"),
    minWidth: wp("0.315359483162562%"),
    height: hp("1.635675873261332%"),
    minHeight: hp("1.635675873261332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6204452514648509%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_59: {
    width: wp("0.4393436511357625%"),
    minWidth: wp("0.4393436511357625%"),
    height: hp("1.25753241158574%"),
    minHeight: hp("1.25753241158574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2040176391601562%"),
    top: hp("0.41233750640370204%")
  },
  ImageBackground_I2_352_1_61: {
    width: wp("0.45153647661209106%"),
    minWidth: wp("0.45153647661209106%"),
    height: hp("1.635675873261332%"),
    minHeight: hp("1.635675873261332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6967875162760464%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_63: {
    width: wp("0.4817311962445577%"),
    minWidth: wp("0.4817311962445577%"),
    height: hp("1.25753241158574%"),
    minHeight: hp("1.25753241158574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200047810872398%"),
    top: hp("0.41233750640370204%")
  },
  ImageBackground_I2_352_1_65: {
    width: wp("0.3171406437953313%"),
    minWidth: wp("0.3171406437953313%"),
    height: hp("1.2117701150029083%"),
    minHeight: hp("1.2117701150029083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.742001851399742%"),
    top: hp("0.42404424948770725%")
  },
  ImageBackground_I2_352_1_67: {
    width: wp("0.1486272489031156%"),
    minWidth: wp("0.1486272489031156%"),
    height: hp("1.6295405684924515%"),
    minHeight: hp("1.6295405684924515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9988759358723982%"),
    top: hp("0.006136868169406284%")
  },
  ImageBackground_I2_352_1_69: {
    width: wp("0.14808718115091324%"),
    minWidth: wp("0.14808718115091324%"),
    height: hp("0.27577417795775366%"),
    minHeight: hp("0.27577417795775366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.046287536621094%"),
    top: hp("1.3592162418886602%")
  },
  ImageBackground_I2_352_1_71: {
    width: wp("0.4816103974978129%"),
    minWidth: wp("0.4816103974978129%"),
    height: hp("1.25753241158574%"),
    minHeight: hp("1.25753241158574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.41233750640370204%")
  },
  ImageBackground_I2_352_1_73: {
    width: wp("0.44445827603340154%"),
    minWidth: wp("0.44445827603340154%"),
    height: hp("1.25753241158574%"),
    minHeight: hp("1.25753241158574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5155563354492188%"),
    top: hp("0.41233750640370204%")
  },
  ImageBackground_I2_352_1_75: {
    width: wp("0.3170333554347356%"),
    minWidth: wp("0.3170333554347356%"),
    height: hp("1.2117701150029083%"),
    minHeight: hp("1.2117701150029083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0384114583333286%"),
    top: hp("0.42404424948770725%")
  },
  View_I2_352_1_77: {
    width: wp("0.5185315012931824%"),
    height: hp("1.6577358454303013%"),
    top: hp("0.007504322489765514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_352_1_78: {
    width: wp("0.5185315012931824%"),
    minWidth: wp("0.5185315012931824%"),
    height: hp("1.6577358454303013%"),
    minHeight: hp("1.6577358454303013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_80: {
    width: wp("0.14896251261234283%"),
    height: hp("0.27738747700967425%"),
    top: hp("1.362751611594959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.55758412679036%")
  },
  ImageBackground_I2_352_1_81: {
    width: wp("0.14896251261234283%"),
    minWidth: wp("0.14896251261234283%"),
    height: hp("0.27738747700967425%"),
    minHeight: hp("0.27738747700967425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_352_1_83: {
    width: wp("3.7824626763661704%"),
    minWidth: wp("3.7824626763661704%"),
    height: hp("2.0904333865056275%"),
    minHeight: hp("2.0904333865056275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.446642557779946%"),
    top: hp("0.3327583354679007%")
  },
  View_I2_352_1_84: {
    width: wp("3.7824614842732744%"),
    height: hp("2.0904311716882256%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_352_1_85: {
    width: wp("0.4254087309042613%"),
    minWidth: wp("0.4254087309042613%"),
    height: hp("1.5440979941946562%"),
    minHeight: hp("1.5440979941946562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.015275465334696037%")
  },
  ImageBackground_I2_352_1_86: {
    width: wp("0.09583286941051483%"),
    minWidth: wp("0.09583286941051483%"),
    height: hp("1.0541932178976758%"),
    minHeight: hp("1.0541932178976758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7568868001302036%"),
    top: hp("0.5052910476434391%")
  },
  ImageBackground_I2_352_1_87: {
    width: wp("0.12028001248836517%"),
    minWidth: wp("0.12028001248836517%"),
    height: hp("0.3154885573465316%"),
    minHeight: hp("0.3154885573465316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7441584269205777%"),
    top: hp("0.012673966871574294%")
  },
  ImageBackground_I2_352_1_88: {
    width: wp("0.4058227191368739%"),
    minWidth: wp("0.4058227191368739%"),
    height: hp("1.6056568896184205%"),
    minHeight: hp("1.6056568896184205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9006373087565152%"),
    top: hp("0.48477923283810753%")
  },
  ImageBackground_I2_352_1_89: {
    width: wp("0.3862650195757548%"),
    minWidth: wp("0.3862650195757548%"),
    height: hp("1.5466630133123347%"),
    minHeight: hp("1.5466630133123347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3602574666341098%"),
    top: hp("0.012673966871574294%")
  },
  ImageBackground_I2_352_1_90: {
    width: wp("0.4058402528365453%"),
    minWidth: wp("0.4058402528365453%"),
    height: hp("1.5902674263292325%"),
    minHeight: hp("1.5902674263292325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.068227132161468%"),
    top: hp("0.48477923283810753%")
  },
  ImageBackground_I2_352_1_91: {
    width: wp("0.3882209211587906%"),
    minWidth: wp("0.3882209211587906%"),
    height: hp("1.097797305206132%"),
    minHeight: hp("1.097797305206132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5160980224609375%"),
    top: hp("0.48477923283810753%")
  },
  ImageBackground_I2_352_1_92: {
    width: wp("0.4058227191368739%"),
    minWidth: wp("0.4058227191368739%"),
    height: hp("1.0926675926792166%"),
    minHeight: hp("1.0926675926792166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9444122314453125%"),
    top: hp("0.48477923283810753%")
  },
  ImageBackground_I2_352_1_93: {
    width: wp("0.0958327203989029%"),
    minWidth: wp("0.0958327203989029%"),
    height: hp("1.559487718050597%"),
    minHeight: hp("1.559487718050597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6866378784179688%"),
    top: hp("0%")
  },
  ImageBackground_I2_352_1_94: {
    width: wp("0.2131791909535726%"),
    minWidth: wp("0.2131791909535726%"),
    height: hp("1.564617756285954%"),
    minHeight: hp("1.564617756285954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.801274617513016%"),
    top: hp("0.012673966871574294%")
  },
  ImageBackground_I2_352_1_95: {
    width: wp("0.24056002497673035%"),
    minWidth: wp("0.24056002497673035%"),
    height: hp("1.074712849705597%"),
    minHeight: hp("1.074712849705597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46644846598307765%"),
    top: hp("0.48477923283810753%")
  },
  ImageBackground_I2_352_1_97: {
    width: wp("0.24055972695350647%"),
    minWidth: wp("0.24055972695350647%"),
    height: hp("1.074712849705597%"),
    minHeight: hp("1.074712849705597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4040323893229214%"),
    top: hp("0.48477923283810753%")
  },
  View_2_692: {
    width: wp("10.416668256123861%"),
    minWidth: wp("10.416668256123861%"),
    minHeight: hp("83.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("27.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_2_692: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 80,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
