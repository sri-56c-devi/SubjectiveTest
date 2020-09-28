$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Excercise/CucumberMaven.zip_expanded/CucumberMaven/src/test/resources/Feature/Register.feature");
formatter.feature({
  "name": "Verifying demobank details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying login details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on rapid test page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register_MainClass.url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter details",
  "keyword": "When "
});
formatter.match({
  "location": "Register_MainClass.product()"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: org/apache/xmlbeans/XmlOptions\r\n\tat org.apache.poi.POIXMLDocumentPart.\u003cclinit\u003e(POIXMLDocumentPart.java:44)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.create(WorkbookFactory.java:61)\r\n\tat StepDef.Register_BaseClass.Fname(Register_BaseClass.java:57)\r\n\tat StepDef.Register_MainClass.product(Register_MainClass.java:25)\r\n\tat ✽.user enter details(D:/Excercise/CucumberMaven.zip_expanded/CucumberMaven/src/test/resources/Feature/Register.feature:5)\r\nCaused by: java.lang.ClassNotFoundException: org.apache.xmlbeans.XmlOptions\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat org.apache.poi.POIXMLDocumentPart.\u003cclinit\u003e(POIXMLDocumentPart.java:44)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.create(WorkbookFactory.java:61)\r\n\tat StepDef.Register_BaseClass.Fname(Register_BaseClass.java:57)\r\n\tat StepDef.Register_MainClass.product(Register_MainClass.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks submit and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_MainClass.select()"
});
formatter.result({
  "status": "skipped"
});
});