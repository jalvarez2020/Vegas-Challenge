import _ from 'lodash'
import React, { Component } from 'react'
import faker from 'faker'
import { Search, Grid, Segment, Header, Card, Image} from 'semantic-ui-react' 
const clients = require('../customers.json')

//Brings in customers and performs search

const source = clients.map((client) => {
    return {
        title: client.first_name + " " + client.last_name,
        id: client.id,
        location: client.latitude + ", " + client.longitude,
        Email: client.email,
        created_at: client.created_at,
        ip: client.ip,
    }
})


const initialState = { isLoading: false, results: [], value: '', selection: '', client: {...source} }

export default class Clients extends Component {
  state = initialState

  handleResultSelect = (e, { result
  }) => {
    this.setState({
      value: result.title,
      selection: result

    })
  } 

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 2500)
  }

  render() {
    console.log("SELECTION", this.state)
    const { isLoading, value, results, client} = this.state
    if(this.state.selection === '') {
      return (
      <Grid textAlign='center'>
        <Grid.Column width={16} textAlign={'center'}>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            placeholder='Search for Customers'
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            } )}
            results={results}
            value={value}
            name={value}
            onClick={this.handleOnClick}
          />
        </Grid.Column>
      </Grid>)
    }

    else if(!this.state.isLoading) {
    return (
      <Grid>
        <Grid.Column width={16} textAlign={'center'}>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            placeholder='Search for Customers'
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            } )}
            results={results}
            value={value}
            onMouseDown={this.handleOnClick}
          />
        </Grid.Column>
        <Grid.Column width={16} >
          <Segment>
           <Header>Client Profile</Header>
           <Card key={this.state.selection.id}>
               <Image src={faker.internet.avatar()}></Image>
              <Card.Content>
                      <Card.Header>{this.state.value}</Card.Header>
                      <Card.Meta>
                          <span className='date'>Joined in {this.state.selection.created_at}</span>
                      </Card.Meta>
                      <Card.Description>
                          {this.state.selection.title} is a musician living in Nashville.
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
              </Card.Content>
           </Card>
          </Segment>
        </Grid.Column>
      </Grid>
    )}
  }
}
