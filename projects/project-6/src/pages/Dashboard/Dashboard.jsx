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
          xl: 'repeat(2, 1fr)',
        }}
        gap={{
          base: 1,
          lg: 2,
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
            lg:1,
            xl:1,
            md:2,
            sm:2
          }}>
          <PriceSection/>
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
            lg:1,
            xl:1,
            md:2,
            sm:2
          }}>
          <Transactions/>
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
            lg:1,
            xl:1,
            md:2,
            sm:2
          }}>
          <Infocard text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" title="Loans" 
          tag_color="p.purple" 
          tag_text_color="white"
          bgColor="white" imgUrl="/shapes.svg" />
          </GridItem>
          <GridItem
          colSpan={{
            base: 1,
            lg:1,
            xl:1,
            md:2,
            sm:2
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