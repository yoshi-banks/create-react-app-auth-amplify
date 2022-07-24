import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  withAuthenticator, 
  AmplfiyProvider,
  Authenticator,
  Button,
  Grid,
  Card,
  View,
  useTheme
} from '@aws-amplify/ui-react'
import {
  NavBar,
  SideBar
} from './my-ui-components';
import { Amplify, API } from 'aws-amplify';
import groups from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { listGroupss } from './graphql/queries';
import { createGroups as createGroupMutation, deleteGroups as deleteGroupMutation } from './graphql/mutations';
import DefaultApp from './DefaultApp';

import awsconfig from './aws-exports';
import aws_exports from './aws-exports';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

const initialGroupState = {groupName: 'Hello Rachael', description: 'Hottie' }

function App() {
  const [groups, setGroups] = useState([]);
  const [groupData, setGroupData] = useState(initialGroupState)

  useEffect(() => {
    fetchGroups();
  }, []);

  async function fetchGroups() {
    const apiData = await API.graphql({ query: listGroupss });
    setGroups(apiData.data.listGroupss.items);
  }
  
  async function createGroup() {
    if (!groupData.groupName || !groupData.description) return;
    await API.graphql({ query: createGroupMutation, variables: { input: groupData } });
    setGroups([ ...groups, groupData ]);
    setGroupData(initialGroupState);
  }

  async function deleteGroup({ id }) {
    const newGroupArray = groups.filter(group => group.id !== id);
    setGroups(newGroupArray);
    await API.graphql({ query: deleteGroupMutation, variables: { input: { id } }});
  }



  return (
    <div className='App'>
      <h1>My Groups App</h1>
      <input
        onChange={e => setGroupData({ ...groupData, 'groupName': e.target.value})}
        placeholder="Group Name"
        value={groupData.groupName}  
      />
      <input
        onChange={e => setGroupData({ ...groupData, 'description': e.target.value})}
        placeholder="Description"
        value={groupData.description}
      />
      <button onClick={createGroup}>Create Group</button>
      <div style={{marginBottom: 30}}>
        {
          groups.map(group => (
            <div key={group.id || group.groupName}>
              <h2>{group.groupName}</h2>
              <p>{group.description}</p>
              <button onClick={() => deleteGroup(group)}>Delete Group</button>
            </div>
          ))
        }
      </div>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <header>
              <Button
              LoadingText=""
              onClick={signOut}
              >
                Sign out
              </Button>
            </header>
          </div>
        )}
      </Authenticator>
    </div>

    // <div>
    //   <GridRowAndColumnSpanExample />
    // </div>
  );
}

export default withAuthenticator(App);








export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}

export const GridRowAndColumnSpanExample = () => {
  const { tokens } = useTheme();
  return (
    <Grid
      templateColumns="1fr 10fr"
      templateRows="1fr 10fr 1fr"
      gap={tokens.space.small}
    >
      <NavBar columnSpan={2} backgroundColor={tokens.colors.orange[10]}></NavBar>
      <SideBar backgroundColor={tokens.colors.orange[20]}></SideBar>
      <DefaultApp rowSpan={1}></DefaultApp>
      <View rowSpan={1} columnSpan={2} backgroundColor={tokens.colors.orange[40]}></View>
    </Grid>
  );
};