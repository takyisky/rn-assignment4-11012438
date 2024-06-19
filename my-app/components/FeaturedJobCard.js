import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ logoPath, jobTitle, companyName, salary, location, backgroundColor }) => {
  return (
    <View style={[styles.featuredJobCard, {backgroundColor}]}>
      <View style={styles.innerfeaturedJobCard}>
        <View style={styles.fjcardtopsection}>
          <Image source={logoPath} style={styles.fjcompanyLogo} />
          <View>
            <Text style={styles.fjjobTitle}>{jobTitle}</Text>
            <Text style={styles.fjcompanyName}>{companyName}</Text>
          </View>
        </View>
        <View style={styles.fjcardbottomsection}>
          <Text style={styles.fjsalary}>{salary}</Text>
          <Text style={styles.fjlocation}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredJobCard: {
   
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
    width: 300,
    
  },
  innerfeaturedJobCard: {
    padding: 25,
    height: 196,
    justifyContent: 'space-between',
  },
  fjcardtopsection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fjcompanyLogo: {
    width: 40,
    height: 40,
    borderRadius: 9,
    marginRight: 10,
    backgroundColor:'#fff',
  },
  fjjobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
  },
  fjcompanyName: {
    fontSize: 14,
    color:'#fff',
  },
  fjcardbottomsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fjsalary: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
  },
  fjlocation: {
    fontSize: 14,
    color:'#fff',
  },
});

export default FeaturedJobCard;