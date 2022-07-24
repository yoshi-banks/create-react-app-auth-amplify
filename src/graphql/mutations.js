/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroups = /* GraphQL */ `
  mutation CreateGroups(
    $input: CreateGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    createGroups(input: $input, condition: $condition) {
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
export const updateGroups = /* GraphQL */ `
  mutation UpdateGroups(
    $input: UpdateGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    updateGroups(input: $input, condition: $condition) {
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
export const deleteGroups = /* GraphQL */ `
  mutation DeleteGroups(
    $input: DeleteGroupsInput!
    $condition: ModelGroupsConditionInput
  ) {
    deleteGroups(input: $input, condition: $condition) {
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
