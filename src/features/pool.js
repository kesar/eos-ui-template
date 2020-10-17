import React, { useContext, useState } from "react";
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
import { toast } from "react-semantic-toasts";
import Layout from "../components/layouts/layout";

const PoolPage = () => {
  const authContext = useContext(UALContext);
  const { control, handleSubmit } = useForm();
  const [txResponse, setTxResponse] = useState({
    type: "info",
    message: "Fill all the fields and press Send",
  });
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
      const response = await activeUser.signTransaction(tx, {
        broadcast: true,
      });
      setTxResponse({
        type: "success",
        message: `done. ${response.transactionId}`,
      });
    } catch (error) {
      setTxResponse({
        type: "error",
        message: error.message,
      });

      toast({
        type: "error",
        title: "Error",
        time: 5000,
        description: <p>{error.message}</p>,
      });
    }
  };

  return (
    <Layout>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
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
          {txResponse.type === "info" && (
            <Message info>{txResponse.message}</Message>
          )}
          {txResponse.type === "error" && (
            <Message error>{txResponse.message}</Message>
          )}
          {txResponse.type === "success" && (
            <Message success>{txResponse.message}</Message>
          )}
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

export default React.memo(PoolPage);
