import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Eric Atsu</Text>
            <Text style={styles.email}>eric@gmail.com</Text>
          </View>
          <Image
            source={require('../assets/profileImage.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>

        {/* Featured jobs */}
        <Text style={styles.fjsectionTitle}>Featured Jobs</Text>
      
        <ScrollView horizontal={true} style={styles.featuredJobsContainer}>

          {/*featuredJobCard 1*/}
          {/* Main card Cantainer */}
          <View style={styles.featuredJobCard} >
            {/* Innercard container */}
            <View style={styles.innerfeaturedJobCard} >

              {/* top Section of the card */}
              <View style={styles.fjcardtopsection}>
                <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                style={styles.fjcompanyLogo}
                />
                <View>
                <Text style={styles.fjjobTitle}>Software Engineer</Text>
                <Text style={styles.fjcompanyName}>Facebook</Text>
                </View>                
              </View>

              {/* Bottom of the card */}
              <View style={styles.fjcardbottomsection}>
                {/* Amount */} 
                <Text style={styles.fjsalary}>$180,000</Text>

                {/* Location */}
                <Text style={styles.fjlocation}>Accra, Ghana</Text>
              </View>
              
            </View>
          </View>

          {/*featuredJobCard 2 */}
          {/* Main card Cantainer */}
          <View style={styles.featuredJobCard} >
            {/* Innercard container */}
            <View style={styles.innerfeaturedJobCard} >

              {/* top Section of the card */}
              <View style={styles.fjcardtopsection}>
                <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                style={styles.fjcompanyLogo}
                />
                <View>
                <Text style={styles.fjjobTitle}>Software Engineer</Text>
                <Text style={styles.fjcompanyName}>Facebook</Text>
                </View>                
              </View>

              {/* Bottom of the card */}
              <View style={styles.fjcardbottomsection}>
                {/* Amount */} 
                <Text style={styles.fjsalary}>$180,000</Text>

                {/* Location */}
                <Text style={styles.fjlocation}>Accra, Ghana</Text>
              </View>
              
            </View>
          </View>

          {/*featuredJobCard 3*/}
          {/* Main card Cantainer */}
          <View style={styles.featuredJobCard} >
            {/* Innercard container */}
            <View style={styles.innerfeaturedJobCard} >

              {/* top Section of the card */}
              <View style={styles.fjcardtopsection}>
                <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                style={styles.fjcompanyLogo}
                />
                <View>
                <Text style={styles.fjjobTitle}>Software Engineer</Text>
                <Text style={styles.fjcompanyName}>Facebook</Text>
                </View>                
              </View>

              {/* Bottom of the card */}
              <View style={styles.fjcardbottomsection}>
                {/* Amount */} 
                <Text style={styles.fjsalary}>$180,000</Text>

                {/* Location */}
                <Text style={styles.fjlocation}>Accra, Ghana</Text>
              </View>
              
            </View>
          </View>

          {/*featuredJobCard 4*/}
          {/* Main card Cantainer */}
          <View style={styles.featuredJobCard} >
            {/* Innercard container */}
            <View style={styles.innerfeaturedJobCard} >

              {/* top Section of the card */}
              <View style={styles.fjcardtopsection}>
                <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                style={styles.fjcompanyLogo}
                />
                <View>
                <Text style={styles.fjjobTitle}>Software Engineer</Text>
                <Text style={styles.fjcompanyName}>Facebook</Text>
                </View>                
              </View>

              {/* Bottom of the card */}
              <View style={styles.fjcardbottomsection}>
                {/* Amount */} 
                <Text style={styles.fjsalary}>$180,000</Text>

                {/* Location */}
                <Text style={styles.fjlocation}>Accra, Ghana</Text>
              </View>
              
            </View>
          </View>

          {/*featuredJobCard 5*/}
          {/* Main card Cantainer */}
          <View style={styles.featuredJobCard} >
            {/* Innercard container */}
            <View style={styles.innerfeaturedJobCard} >

              {/* top Section of the card */}
              <View style={styles.fjcardtopsection}>
                <Image
                source={{ uri: 'https://via.placeholder.com/40' }}
                style={styles.fjcompanyLogo}
                />
                <View>
                <Text style={styles.fjjobTitle}>Software Engineer</Text>
                <Text style={styles.fjcompanyName}>Facebook</Text>
                </View>                
              </View>

              {/* Bottom of the card */}
              <View style={styles.fjcardbottomsection}>
                {/* Amount */} 
                <Text style={styles.fjsalary}>$180,000</Text>

                {/* Location */}
                <Text style={styles.fjlocation}>Accra, Ghana</Text>
              </View>
              
            </View>
          </View>

        
        </ScrollView>



        <Text style={styles.pjsectionTitle}>Popular Jobs</Text>

        {/* Porpular Job Card 1*/}
        <View style={styles.popularJobCard}>

          {/*Logo*/}
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.companyLogo}
          />
          {/*  beside the logo */}
          <View style={styles.pjCardRight}>

            {/* left view */}
            <View style={styles.jobTitle}>

              <Text style={styles.jobTitleText}>Jr Executive</Text>
              <Text style={styles.companyNameText}>Burger King</Text>

            </View>
            
            {/* Right view */}
            <View style={styles.jobPay}>

              <Text style={styles.salary}>$96,000/y</Text>
              <Text style={styles.location}>Los Angeles, US</Text>

            </View>
            
          </View>
        </View>
        

        {/* Porpular Job Card 2*/}
        <View style={styles.popularJobCard}>

          {/*Logo*/}
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.companyLogo}
          />
          {/*  beside the logo */}
          <View style={styles.pjCardRight}>

            {/* left view */}
            <View style={styles.jobTitle}>

              <Text style={styles.jobTitleText}>Product Manager</Text>
              <Text style={styles.companyNameText}>Beats</Text>

            </View>
            
            {/* Right view */}
            <View style={styles.jobPay}>

              <Text style={styles.salary}>$84,000/y</Text>
              <Text style={styles.location}>Florida, US</Text>

            </View>
            
          </View>
        </View>


        {/* Porpular Job Card 3*/}
        <View style={styles.popularJobCard}>

        {/*Logo*/}
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.companyLogo}
        />
        {/*  beside the logo */}
        <View style={styles.pjCardRight}>

          {/* left view */}
          <View style={styles.jobTitle}>

            <Text style={styles.jobTitleText}>Product Manager</Text>
            <Text style={styles.companyNameText}>Facebook</Text>

          </View>
          
          {/* Right view */}
          <View style={styles.jobPay}>

            <Text style={styles.salary}>$86,000/y</Text>
            <Text style={styles.location}>Florida, US</Text>

          </View>
          
        </View>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8FA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },


  //Featured Job styling
  fjsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredJobsContainer: {
    padding: 10,
  },
  featuredJobCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
    width: 280,
  },
  innerfeaturedJobCard: {
    padding: 25 ,
    height: 196, // Adjust height as needed
    justifyContent: 'space-between', // Ensures top and bottom sections are at the ends
  },
  fjcardtopsection: {
    flexDirection: 'row', // Aligns logo and text side by side
    alignItems: 'center', // Centers them vertically
  },
  fjcompanyName:{
    fontSize: 14,
    color: 'gray',
  },
  fjjobTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  fjcompanyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  fjcardbottomsection: {
    flexDirection: 'row', // Aligns salary and location side by side
    justifyContent: 'space-between', // Pushes salary to the left and location to the right
    
  },
  fjsalary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fjlocation: {
    fontSize: 14,
    color: 'gray',
  },

  //Popular Job Styling
  pjsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:30,
  },

  pjCardRight:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  jobTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyNameText: {
    fontSize: 14,
    color: 'gray',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  popularJobCard: {
    flexDirection: 'row',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
    alignItems: 'center', // Center vertically
    marginVertical:10,
  },
  jobTitle:{
    marginLeft:10,

  },
  jobPay:{
    alignItems: 'flex-end',
  },
});

export default HomeScreen;
