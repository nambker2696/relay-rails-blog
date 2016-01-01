import Relay from 'react-relay';

export default class extends Relay.Mutation  {

    getMutation() {
        return Relay.QL`mutation{DestroyPostVote}`;
    }

    getFatQuery() {
        return Relay.QL`
          fragment on DestroyPostVotePayload {
            post {
                votes_count,
                voted
            }
        }
        `;
    }

    getConfigs() {
        return [
            {
                type: 'FIELDS_CHANGE',
                fieldIDs: {
                    post: this.props.post.id
                }
            }
        ];
    }

    getVariables() {
        return {
            votable_type: this.props.votable_type,
            votable_id: this.props.post.id
        };
    }
}
