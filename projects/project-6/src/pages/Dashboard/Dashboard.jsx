import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection"
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import Infocard from "./components/Infocard";
const Dashboard = () => {
  return (

      <DashboardLayout title="Dashboard">
        <Grid 
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={{
          base: '2',
          md: '4',
        }}
        >
          <GridItem
          colSpan={{
            base: 2,
          }}
          >
          <PortfolioSection />
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
          }}>
          <PriceSection/>
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
          }}>
          <Transactions/>
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
          }}>
          <Infocard text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" title="Loans" 
          tag_color="p.purple" 
          tag_text_color="white"
          bgColor="white" imgUrl="/shapes.svg" />
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
          }}>
          <Infocard text="Learn more about our real estate, mortgage, and  corporate account services" title="Contact" tag_color="white"
          tag_text_color="p.purple"
          bgColor="p.purple"
          imgUrl="/ContactShape.svg" textColor="white" />
          </GridItem>
        </Grid>
      </DashboardLayout>


  )
}

export default Dashboard