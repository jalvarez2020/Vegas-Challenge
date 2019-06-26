import _ from 'lodash'
import React, { Component } from 'react'
import faker from 'faker'
import { Search, Grid, Segment, Header, Card, Image} from 'semantic-ui-react'
import Dashboard from './dashboard.js';
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


const initialState = { isLoading: false, results: [], value: '', selection: "", client: {...source} }

export default class Clients extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title, selection: result.title})

  handleOnClick = (e) => {
    this.setState({
        selection: this.state.value
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
    }, 6000)
  }

  render() {
    const { isLoading, value, results } = this.state
    if(this.state.selection === "") {
      return (
      <Grid textAlign='center'>
        <Grid.Column width={16} textAlign={'center'}>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            placeholder='Search for Customers'
            onSearchChange={_.debounce(this.handleSearchChange, 5000, {
              leading: true,
            } )}
            results={results}
            value={value}
            name={value}
            {...this.props}
            onClick={this.handleOnClick}
          />
        </Grid.Column>
        <h1>Client Profile</h1>
      </Grid>)
    }

    else if(this.state.isLoading) {
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
            {...this.props}
            onFocus={this.handleOnClick}
          />
        </Grid.Column>
        <Grid.Column width={16} >
          <Segment >
           <Header textAlign={'center'}>Client Profile</Header>
           <Card  textAlign={'center'}>
               <Image src={faker.internet.avatar()}></Image>
            <Card.Content>
                    <Card.Header>{this.state.value}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in {this.props.Email}</span>
                    </Card.Meta>
                    <Card.Description>
                        {this.state.value} is a musician living in Nashville.
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
