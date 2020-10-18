import React, { useContext, useState } from "react";
import { UALContext } from "ual-reactjs-renderer";
import Layout from "../components/layouts/layout";

const PoolPage = () => {
  const authContext = useContext(UALContext);
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
    }
  };

  return <Layout>test</Layout>;
};

export default React.memo(PoolPage);
