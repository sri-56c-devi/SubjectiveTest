package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
	@RunWith(Cucumber.class)
		@CucumberOptions(
				features= {"D:\\Excercise\\CucumberMaven.zip_expanded\\CucumberMaven\\src\\test\\resources\\Feature\\Register.feature"},
				glue="StepDef",
			    plugin = {"pretty","html:target/cucumber-reports"}
				)	
		public class RunnerClass 
	{
			

	}

