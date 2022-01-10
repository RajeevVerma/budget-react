import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Divider,
  Form,
  FormGroup,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,734.54</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>625</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $10.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $100.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $20.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as="h3">Add New Transaction</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shiny thing"
          />
          <FormInput
            width={4}
            label="Value"
            placeholder="100.00"
            icon="doller"
            iconPosition="left"
          />
        </FormGroup>
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <ButtonOr />
          <Button primary>OK</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
