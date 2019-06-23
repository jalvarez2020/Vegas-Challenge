import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Card, Image } from 'semantic-ui-react'
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


const initialState = { isLoading: false, results: [], value: '', selection: {} }

export default class Clients extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title,})

  handleOnClick = (e) => {
    this.setState({
        selection: e.target.id
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
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={16} textAlign={'center'}>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            placeholder='Search by First name or Last name'
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            } )}
            results={results}
            value={value}
            {...this.props}
            onClick={this.handleOnClick}
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
    )
  }
}