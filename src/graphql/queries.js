/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroups = /* GraphQL */ `
  query GetGroups($id: ID!) {
    getGroups(id: $id) {
      id
      groupName
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listGroupss = /* GraphQL */ `
  query ListGroupss(
    $filter: ModelGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupName
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        groupName
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
