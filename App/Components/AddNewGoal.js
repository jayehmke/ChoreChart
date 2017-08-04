import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'
import { ActivityIndicator, Modal } from 'react-native'

class AddNewGoal extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
    }
    console.log(this.props)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.props.modalVisible}
          >
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World! from components {this.props.modalVisible}</Text>

                <Button onPress={() => {
                  this.props.setModalVisible()
                }}>
                  <Text>Hide Modal</Text>
                </Button>

              </View>
            </View>
          </Modal>
      )
    }

  }
}
AddNewGoal.contextTypes = {
  drawer: React.PropTypes.object,
  modalVisible: React.PropTypes.bool,
  setModalVisible: React.PropTypes.func,
}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(AddNewGoal)
