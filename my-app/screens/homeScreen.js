import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import JobCard from '../components/JobCard';
import FeaturedJobCard from '../components/FeaturedJobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    //Featured blog cards
    {
      //Facebook
      logoPath: require('../assets/Facebook2.png'),
      jobTitle: 'Software Engineer',
      companyName: 'Facebook',
      salary: '$180,000',
      location: 'Accra, Ghana',
      backgroundColor: '#356899',
    },
    {
      //Git Hub
      logoPath: require('../assets/githublogo.jpeg'),
      jobTitle: 'Software Architect',
      companyName: 'Github',
      salary: '$480,000',
      location: 'Accra, Sunyani',
      backgroundColor: '#000',
    },
    {
      //Pinterest
      logoPath: require('../assets/pinterestlogo.jpeg'),
      jobTitle: 'Designer',
      companyName: 'Pinterest',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#f01e2c',
    },
    {
      //Uber
      logoPath: require('../assets/uberlogo.jpeg'),
      jobTitle: 'Driver',
      companyName: 'Uber',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#131313',
    },
    {
    //Bolt
      logoPath: require('../assets/boltlogo.jpeg'),
      jobTitle: 'Driver',
      companyName: 'Bolt',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#4cbb17',
    },
    {
    //Amazon
      logoPath: require('../assets/amazonlogo.jpeg'),
      jobTitle: 'Sales Person',
      companyName: 'Amazon',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#e6cc00',
    },
    {
      //Ali express
        logoPath: require('../assets/aliexpresslogo.jpeg'),
        jobTitle: 'Sales Person',
        companyName: 'Ali Express',
        salary: '$80,000',
        location: 'Tamale, Ghana',
        backgroundColor: '#A8092d',
    },
    {
      //Twitter
        logoPath: require('../assets/twitterlogo.jpeg'),
        jobTitle: 'Fronend Developer',
        companyName: 'Twitter',
        salary: '$980,000',
        location: 'Tamale, Ghana',
        backgroundColor: '#04356a',
    },

  ];

  const popularJobs = [
    //Popular job cards
    {
      logoPath: require('../assets/burgerkinglogo.png'),
      jobTitle: 'Jr Executive',
      companyName: 'Burger King',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/beatslogo.png'),
      jobTitle: 'Product Manager',
      companyName: 'Beats',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/Facebook2.png'),
      jobTitle: 'Product Manager ',
      companyName: 'Facebook',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/githublogo.jpeg'),
      jobTitle: 'Frontend Developer',
      companyName: 'Github',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/twitterlogo.jpeg'),
      jobTitle: 'Backend Developer',
      companyName: 'Twitter',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/googlelogo.jpeg'),
      jobTitle: 'Database Manager',
      companyName: 'Google',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/amazonlogo.jpeg'),
      jobTitle: 'CEO',
      companyName: 'Amazon',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/pinterestlogo.jpeg'),
      jobTitle: 'Content Creator',
      companyName: 'Pinterest',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },

  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <Image
            source={require('../assets/profileImage.png')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
              <Image
                source={require('../assets/searchIcon.png')}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search a job or position"
              />
            </View>
          <View style={styles.filterIconContainer}>
            <Image
              source={require('../assets/filter.png')}
              style={styles.filterIcon}
            />
          </View>
        </View>

        <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',}} >
          <Text style={styles.fjsectionTitle}>Featured Jobs</Text>
          <Text style={styles.fjseealltext}> See all </Text>
        </View>
        
        <ScrollView horizontal={true} style={styles.featuredJobsContainer}>
          {featuredJobs.map((job, index) => (
            <FeaturedJobCard key={index} {...job} />
          ))}
        </ScrollView>
        <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',}} >
          <Text style={styles.pjsectionTitle}>Popular Jobs</Text>
          <Text style={styles.pjseealltext}> See all </Text>
        </View>
        
        {popularJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    paddingVertical:10,
    marginTop: 16,
    marginBottom: 16,
    
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical:6,
    marginRight: 5,
    
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  filterIconContainer: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 16,
    marginLeft: 8,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  fjsectionTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fjseealltext:{
    marginTop: 15,
    marginBottom: 10,
    color: 'gray',
  },
  featuredJobsContainer: {
    padding: 10,
  },
  pjsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  pjseealltext:{
    marginBottom: 10,
    marginTop: 30,
    color:'gray',
  },
});

export default HomeScreen;
