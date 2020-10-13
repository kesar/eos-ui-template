import React, { useContext } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { useForm, Controller } from "react-hook-form";
import { UALContext } from "ual-reactjs-renderer";

const TransferPage = () => {
  const authContext = useContext(UALContext);
  const { control, errors, handleSubmit } = useForm();

  console.log(authContext);

  const onSubmit = async (data) => {
    const { activeUser } = authContext;
    const tx = {
      actions: [
        {
          account: "eosio.token",
          name: "transfer",
          authorization: [
            {
              actor: activeUser.accountName,
              permission: activeUser.requestPermission,
            },
          ],
          data: {
            from: activeUser.accountName,
            to: data.user,
            quantity: data.amount,
            memo: "UAL rocks!",
          },
        },
      ],
    };

    try {
      await activeUser.signTransaction(tx, { broadcast: true });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Transfer tokens
        </Header>
        <Form size="large" onSubmit={handleSubmit(onSubmit)}>
          <Segment stacked>
            <Controller
              as={Form.Input}
              name="user"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Account"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              as={Form.Input}
              name="amount"
              fluid
              icon="money"
              iconPosition="left"
              placeholder="Amount"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />

            <Button color="teal" fluid size="large">
              Send
            </Button>
          </Segment>
        </Form>
        <Message>
          Random message
          <a href="/">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default React.memo(TransferPage);
