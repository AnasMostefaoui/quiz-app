import React, { Fragment } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

const ShareButton = () => {
  const url = 'https://exam-app.vercel.app/'
  const handleClick = () => {
    navigator
      .share({
        title: document.title,
        text: 'Check out this quiz app — it rocks!',
        url: url
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.log(error.message));
  };

  return (
    <Fragment>
      {navigator.share ? (
        <Button
          title="Share"
          floated="right"
          size="big"
          circular
          icon="share alternate"
          onClick={handleClick}
        />
      ) : (
        <Modal
          closeIcon
          size="tiny"
          trigger={
            <Button
              title="Share"
              floated="right"
              size="big"
              circular
              icon="share alternate"
            />
          }
        >
          <Modal.Header className="ui center aligned">Share on</Modal.Header>
          <Modal.Content className="ui center aligned container">
            <a
              href="https://www.facebook.com/sharer.php?u=https%3A//exam-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="facebook" size="big" style={{ marginBottom: 8 }}>
                <Icon name="facebook" />
                Facebook
              </Button>
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A//exam-app.vercel.app/&text=Check%20out%20this%20quiz%20app%20—%20it%20rocks!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="twitter" size="big" style={{ marginBottom: 8 }}>
                <Icon name="twitter" />
                Twitter
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fexam-app.vercel.app%2Fquiz-app%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="linkedin" size="big">
                <Icon name="linkedin" />
                LinkedIn
              </Button>
            </a>
          </Modal.Content>
        </Modal>
      )}
    </Fragment>
  );
};

export default ShareButton;
