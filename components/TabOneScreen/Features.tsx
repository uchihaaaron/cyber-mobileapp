import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Features() {
  const data = [
    {
      title :"Class Attendance",
      icon : require("./../../assets/images/classA1.png"),
      text: "Attendance"
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.features}>
        <Text style={styles.title}>Class Attendance</Text>
        <View style={styles.featuresElements}>
          <View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA1.png")} />

              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Attendance</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA2.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Absentees</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA3.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Leave</Text>
                <Text style={styles.featuresText}>Request</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA4.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Attendance Per</Text>
                <Text style={styles.featuresText}>Subjects</Text></View>
            </View>
          </View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA5.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Monthly</Text>
                <Text style={styles.featuresText}>Report</Text></View>
            </View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA6.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Weekly</Text>
                <Text style={styles.featuresText}>Report</Text></View>
            </View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA7.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Notify</Text>
                <Text style={styles.featuresText}>Parent</Text></View>
            </View>
            <View style={styles.featuresElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/classA1.png")} />
              <View style={styles.featuresTextContainer}>
                <Text style={styles.featuresText}>Class</Text>
                <Text style={styles.featuresText}>Attendance</Text></View>
            </View>
       
        </View>
      </View>

      <View style={styles.students}>
        <Text style={styles.title}>Student Analysis</Text>
        <View style={styles.studentsElements}>
          <View>
            <View style={styles.studentsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/student1.png")} />

              <View style={styles.studentsTextContainer}>
                <Text style={styles.studentsText}>Record</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.studentsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/student2.png")} />
              <View style={styles.studentsTextContainer}>
                <Text style={styles.studentsText}>Absentees</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.studentsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/student3.png")} />
              <View style={styles.studentsTextContainer}>
                <Text style={styles.studentsText}>Leave</Text>
                <Text style={styles.studentsText}>Request</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.studentsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/student4.png")} />
              <View style={styles.studentsTextContainer}>
                <Text style={styles.studentsText}>Attendance Per</Text>
                <Text style={styles.studentsText}>Subjects</Text></View>
            </View>
          </View>
       
        </View>
      </View>

      <View style={styles.academics}>
        <Text style={styles.title}>Academic</Text>
        <View style={styles.academicsElements}>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/academics2.png")} />

              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Homework</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/academics3.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Assignment</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/academics4.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Event </Text>
                <Text style={styles.academicsText}>Calander</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/academics6.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Online Class</Text></View>
            </View>
          </View>
       
        </View>
      </View>

      <View style={styles.academics}>
        <Text style={styles.title}>Examination</Text>
        <View style={styles.academicsElements}>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam1.png")} />

              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Exam plan</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam2.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Online Exam</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam3.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Marks Entry</Text></View>
            </View>
          </View>

          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam4.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Exam</Text>
                <Text style={styles.academicsText}>Attendance</Text></View>
            </View>
          </View>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam6.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Dispatch</Text>
                <Text style={styles.academicsText}>Result</Text></View>
            </View>
          </View>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam5.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Result</Text>
                <Text style={styles.academicsText}>Summary</Text></View>
            </View>
          </View>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam7.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Question</Text>
                <Text style={styles.academicsText}>Paper</Text></View>
            </View>
          </View>
          <View>
            <View style={styles.academicsElement} >
              <Image style={styles.featureIcon} source={require("./../../assets/images/exam8.png")} />
              <View style={styles.academicsTextContainer}>
                <Text style={styles.academicsText}>Remarks</Text></View>
            </View>
          </View>
       
        </View>
      </View>

      
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
 
  featureIcon:{ 
  },
  features: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10
  },
  featuresElements: {
    width :"100%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-around",
    gap:5,
    padding:10
  },
  featuresElement: {
    padding:5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  featuresTextContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 9,
    alignItems:"center"
  },
  featuresText:{
    fontSize:12,
    fontWeight:"500"
  },
  
  students: {
    marginTop:10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10
  },
  studentsElements: {
    width :"100%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-around",
    gap:5,
    padding:10
  },
  studentsElement: {
    padding:5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  studentsTextContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 9,
    alignItems:"center"
  },
  studentsText:{
    fontSize:12,
    fontWeight:"500"
  },
  academics: {
    marginTop:10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10
  },
  academicsElements: {
    width :"100%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-around",
    gap:5,
    padding:10
  },
  academicsElement: {
    padding:5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  academicsTextContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 9,
    alignItems:"center"
  },
  academicsText:{
    fontSize:12,
    fontWeight:"500"
  },
  
  
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});